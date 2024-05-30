const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/getAllUsers', async (req, res) => {
    try {
        const sql = 'SELECT * FROM users';
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/getUserById', async (req, res) => {
    try {
        const roleId = req.query.id;
        const sql = 'SELECT * FROM users WHERE id = ?';
        db.query(sql, [roleId], (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.post('/addUser', (req, res) => {
    try {
        var data = [req.body.data];
        var sql = 'INSERT INTO `users`(`username, password, name, gender,phone, email, address, image, created_date,status, role_id`) VALUES (?,?,?,?,?,?,?,?,?,?,?)';
        db.query(sql, [data], (err, result) => {
            if (err) throw err;
            res.send(result);
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
router.post('/deleteUser', (req, res) => {
    try {
        var data = [req.body.id];
        var sql = 'DELETE FROM users WHERE id = ?';
        db.query(sql, [data], (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})


module.exports = router;
