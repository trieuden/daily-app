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
router.get('/getSpendByUserId', async (req, res) => {
    try {
        const userId = req.query.user_id;
        const sql = 'SELECT * FROM spends WHERE user_id = ?';
        db.query(sql, [userId], (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.post('/addSpend', (req, res) => {
    try {
        var data = req.body.data;
        var sql = 'INSERT INTO `spends`(total, created_date, user_id) VALUES (?,?,?)';
        db.query(sql, [data.total, data.created_date, data.user_id], (err, result) => {
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
router.post('/updateSpend', (req, res) => {
    try {
        const { total, created_date, user_id, id } = req.body.data;
        const sql = 'UPDATE spends SET total = ?, created_date = ?, user_id = ? WHERE id = ?';
        db.query(sql, [total, created_date, user_id, id], (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.send(result);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
