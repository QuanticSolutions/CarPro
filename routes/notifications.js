const express = require("express");
const db = require("../database/connection");
const router = express.Router();

router.post('/', (req, res) => {
    const { user_id, message, createdBy } = req.body;
    const query = 'INSERT INTO notifications (user_id, message, created_by) VALUES (?, ?, ?)';
    db.query(query, [user_id, message, createdBy], async (err, result) => {
        if (err) return res.status(500).json({ message: err });
        res.status(201).json({ message: 'Notification sent' });
    });
});

router.get('/:user_id', (req, res) => {

    const { user_id } = req.params;
    const query = 'SELECT * FROM notifications WHERE user_id = ? ORDER BY created_at DESC';
    db.query(query, [user_id], (err, results) => {
        if (err) return res.status(500).json({ message: 'Error fetching notifications' });
        res.json(results);
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'UPDATE notifications SET is_read = TRUE WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ message: 'Error updating notification' });
        res.json({ message: 'Notification marked as read' });
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM notifications WHERE id = ?';

    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ message: 'Error deleting notification' });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Notification not found' });
        res.json({ message: 'Notification deleted successfully' });
    });
});

module.exports = router