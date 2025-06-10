const express = require("express");
const db = require("../database/connection");
const router = express.Router();


router.post("/", (req, res) => {
    const {
        user_id, city, model, price, trim, kilometers, year, manufacturer, seats,
        car_plate_number, warranty, steering_wheel, seller_type, body,
        regional_specs, number_of_cylinders, exterior_color, interior_color,
        engine_capacity, transmission, horse_power, dealer_name, doors, category,
        featured, status, name, phone, gmail, location, title, description, country, fuel_type, wheels,
        length
    } = req.body;
    const sql = `
    INSERT INTO rent (
      user_id, city, model, price, trim, kilometers, year, manufacturer, seats, 
      car_plate_number, warranty, steering_wheel, seller_type, body, regional_specs, 
      number_of_cylinders, exterior_color, interior_color, engine_capacity, transmission, 
      horse_power, dealer_name, doors, category, popular, date, featured, status, 
      name, phone, gmail, location, title, description, country, fuel_type, wheels, length
    ) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
  `;


    const values = [
        user_id, city, model, price, trim, kilometers, year, manufacturer, seats,
        car_plate_number, warranty, steering_wheel, seller_type, body, regional_specs,
        number_of_cylinders, exterior_color, interior_color, engine_capacity, transmission,
        horse_power, dealer_name, doors, category, 0, new Date(), featured, status, name, phone, gmail, location, title, description, country, fuel_type,
        wheels, length
    ];

    db.query(sql, values, (err, result) => {
        if (err) { console.log(err.message); return res.status(500).json({ error: err.message }) };
        res.json({ message: "Sell Ad created successfully", id: result.insertId });
    });
});

router.get("/", (req, res) => {
    db.query("SELECT * FROM rent", (err, results) => {
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
        featured, status, name, phone, gmail, location, title, description, country, fuel_type, reported, wheels, length
    } = req.body;
    const sql = `UPDATE rent SET user_id=?, city=?, model=?, price=?, trim=?, kilometers=?, year=?, 
                  manufacturer=?, seats=?, car_plate_number=?, warranty=?, steering_wheel=?, 
                  seller_type=?, body=?, regional_specs=?, number_of_cylinders=?, exterior_color=?, 
                  interior_color=?, engine_capacity=?, transmission=?, horse_power=?, dealer_name=?, 
                  doors=?, category=?, popular=?, date=?, featured=?, status=?, name=?, phone=?, gmail=?, 
                  location=?, title=?, description=?, country=?, fuel_type=?, reported=?, wheels=?, length=? WHERE id=?`;

    const values = [
        user_id, city, model, price, trim, kilometers, year, manufacturer, seats,
        car_plate_number, warranty, steering_wheel, seller_type, body, regional_specs,
        number_of_cylinders, exterior_color, interior_color, engine_capacity, transmission,
        horse_power, dealer_name, doors, category, 0, new Date(), featured, status, name, phone, gmail, location, 
        title, description, country, fuel_type, reported, wheels, length, req.params.id
    ];
    db.query(sql, values, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: "Ad not found" });
        res.json({ message: "Ad updated successfully" });
    });
});

router.delete("/:id", (req, res) => {
    db.query("DELETE FROM rent WHERE id = ?", [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: "Ad not found" });
        res.json({ message: "Ad deleted successfully" });
    });
});

router.get("/:id", (req, res) => {
    db.query("SELECT * FROM rent WHERE id = ?", [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.status(404).json({ message: "Ad not found" });
        res.json(result[0]);
    });
});

router.get("/user/:id", (req, res) => {
    db.query("SELECT * FROM rent WHERE user_id = ?", [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        const formattedData = result.map(ad => ({
            ...ad,
            adType: "rent" 
        }));

        console.log(formattedData);
        res.json(formattedData);
    });
});

module.exports = router;
