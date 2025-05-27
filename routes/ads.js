const express = require("express");
const db = require("../database/connection");
const router = express.Router();

router.post("/", (req, res) => {
    const {
        user_id, city, model, price, trim, kilometers, year, manufacturer, seats,
        car_plate_number, warranty, steering_wheel, seller_type, body,
        regional_specs, number_of_cylinders, exterior_color, interior_color,
        engine_capacity, transmission, horse_power, dealer_name, doors, category,
        featured, status, name, phone, gmail, location, title, description, country, fuel_type
    } = req.body;
    const sql = `
    INSERT INTO ads (
      user_id, city, model, price, trim, kilometers, year, manufacturer, seats, 
      car_plate_number, warranty, steering_wheel, seller_type, body, regional_specs, 
      number_of_cylinders, exterior_color, interior_color, engine_capacity, transmission, 
      horse_power, dealer_name, doors, category, popular, date, featured, status, 
      name, phone, gmail, location, title, description, country, fuel_type
    ) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
  `;


    const values = [
        user_id, city, model, price, trim, kilometers, year, manufacturer, seats,
        car_plate_number, warranty, steering_wheel, seller_type, body, regional_specs,
        number_of_cylinders, exterior_color, interior_color, engine_capacity, transmission,
        horse_power, dealer_name, doors, category, 0, new Date(), featured, status, name, phone, gmail, location, title, description, country, fuel_type
    ];

    db.query(sql, values, (err, result) => {
        if (err) { console.log(err.message); return res.status(500).json({ error: err.message }) };
        res.json({ message: "Sell Ad created successfully", id: result.insertId });
    });
});


router.get("/", (req, res) => {

    db.query("SELECT * FROM ads ORDER BY date DESC", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

router.put("/:id", (req, res) => {
    const {
        user_id, city, model, price, trim, kilometers, year, manufacturer, seats,
        car_plate_number, warranty, steering_wheel, seller_type, body,
        regional_specs, number_of_cylinders, exterior_color, interior_color,
        engine_capacity, transmission, horse_power, dealer_name, doors, category,
        featured, status, name, phone, gmail, location, title, description, country, fuel_type, reported
    } = req.body;
    const sql = `UPDATE ads SET user_id=?, city=?, model=?, price=?, trim=?, kilometers=?, year=?, 
                  manufacturer=?, seats=?, car_plate_number=?, warranty=?, steering_wheel=?, 
                  seller_type=?, body=?, regional_specs=?, number_of_cylinders=?, exterior_color=?, 
                  interior_color=?, engine_capacity=?, transmission=?, horse_power=?, dealer_name=?, 
                  doors=?, category=?, popular=?, date=?, featured=?, status=?, name=?, phone=?, gmail=?, 
                  location=?, title=?, description=?, country=?, fuel_type=?, reported=? WHERE id=?`;

    const values = [
        user_id, city, model, price, trim, kilometers, year, manufacturer, seats,
        car_plate_number, warranty, steering_wheel, seller_type, body, regional_specs,
        number_of_cylinders, exterior_color, interior_color, engine_capacity, transmission,
        horse_power, dealer_name, doors, category, 0, new Date(), featured, status, name, phone, gmail, location, 
        title, description, country, fuel_type, reported, req.params.id
    ];
    db.query(sql, values, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: "Ad not found" });
        res.json({ message: "Ad updated successfully" });
    });
});

router.delete("/:id", (req, res) => {
    db.query("DELETE FROM ads WHERE id = ?", [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: "Ad not found" });
        res.json({ message: "Ad deleted successfully" });
    });
});

router.get("/:id", (req, res) => {
    db.query("SELECT * FROM ads WHERE id = ?", [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.json([]);
        res.json(result);
    });
});

router.get("/user/:id", (req, res) => {
    db.query("SELECT * FROM ads WHERE user_id = ?", [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        const formattedData = result.map(ad => ({
            ...ad,
            adType: "sell" 
        }));

        console.log(formattedData);
        res.json(formattedData);
    });
});

router.get('/preview/:id', async (req, res) => {

    db.query("SELECT * FROM ads WHERE id = ?", [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.json([]);
        const html = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>${result.title}</title>
      
            <!-- Open Graph tags -->
            <meta property="og:title" content="${result.title}" />
            <meta property="og:description" content="${result.description}" />
            <meta property="og:image" content="${result.imageUrl}" />
            <meta property="og:url" content="https://carpro.quanticsols.com/ad/${result.id}" />
            <meta property="og:type" content="website" />
      
            <!-- Twitter Card -->
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="${result.title}" />
            <meta name="twitter:description" content="${result.description}" />
            <meta name="twitter:image" content="${result.imageUrl}" />
          </head>
          <body>
            Redirecting to the app...
            <script>window.location.href = "https://carpro.quanticsols.com/ad/${result.id}"</script>
          </body>
          </html>
        `;
        res.send(html);
    });
});

module.exports = router;
