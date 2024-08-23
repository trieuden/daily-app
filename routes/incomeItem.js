const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/getAllIncomeItems', async (req, res) => {
    try {
        const sql = 'SELECT * FROM income_items';
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/getIncomeItemById', async (req, res) => {
    try {
        const id = req.query.id;
        const sql = 'SELECT * FROM income_items WHERE id = ?';
        db.query(sql, [id], (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.post('/addIncomeItem', (req, res) => {
    try {
        var data = req.body.data;
        var sql = 'INSERT INTO `income_items`(income_id, name, created_date, price) VALUES (?,?,?,?)';
        db.query(sql, [data.income_id, data.name, data.created_date, data.price], (err, result) => {
            if (err) throw err;
            res.send(result);
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
router.post('/deleteIncomeItem', (req, res) => {
    try {
        var data = [req.body.id];
        var sql = 'DELETE FROM income_items WHERE id = ?';
        db.query(sql, [data], (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})


module.exports = router;
