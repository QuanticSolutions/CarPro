const express = require("express");
const db = require("../database/connection");
const router = express.Router();

router.post('/', (req, res) => {
    const { user_id, ad_id } = req.body;
    const query = 'INSERT INTO favourites (user_id, ad_id) VALUES (?, ?)';
    db.query(query, [user_id, ad_id], async (err, result) => {
        if (err) return res.status(500).json({ message: err });
        res.status(201).json({ message: 'favourite sent' });
    });
});

router.get('/user/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM favourites WHERE user_id = ? ORDER BY id DESC';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ message: 'Error fetching favourites' });
        res.json(results);
    });
});

router.get('/ad/:ad_id', (req, res) => {
    const { ad_id } = req.params;
    const query = 'SELECT * FROM favourites WHERE ad_id = ?';
    db.query(query, [ad_id], (err, results) => {
        if (err) return res.status(500).json({ message: 'Error fetching favourites' });
        res.json(results);
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM favourites WHERE ad_id = ?';
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ message: 'Error deleting favourites' });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'favourites not found' });
        res.json({ message: 'favourites deleted successfully' });
    });
});

module.exports = router