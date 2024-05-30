const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/getAllSpends', async (req, res) => {
    try {
        const sql = 'SELECT * FROM spends';
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/getSpendById', async (req, res) => {
    try {
        const roleId = req.query.id;
        const sql = 'SELECT * FROM spends WHERE id = ?';
        db.query(sql, [roleId], (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.post('/addSpend', (req, res) => {
    try {
        var data = [req.body.data];
        var sql = 'INSERT INTO `spends`(`total, created_date, decription, user_id`) VALUES (?,?,?,?)';
        db.query(sql, [data], (err, result) => {
            if (err) throw err;
            res.send(result);
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
router.post('/deleteSpend', (req, res) => {
    try {
        var data = [req.body.id];
        var sql = 'DELETE FROM spends WHERE id = ?';
        db.query(sql, [data], (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})


module.exports = router;
