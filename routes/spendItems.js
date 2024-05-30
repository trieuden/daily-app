const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/getAllSpendItems', async (req, res) => {
    try {
        const sql = 'SELECT * FROM spend_items';
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/getSpendItemById', async (req, res) => {
    try {
        const roleId = req.query.id;
        const sql = 'SELECT * FROM spend_items WHERE id = ?';
        db.query(sql, [roleId], (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.post('/addSpendItem', (req, res) => {
    try {
        var data = [req.body.data];
        var sql = 'INSERT INTO `spend_items`(`spend_id, spend_type_id, price`) VALUES (?,?,?)';
        db.query(sql, [data], (err, result) => {
            if (err) throw err;
            res.send(result);
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
router.post('/deleteSpendItem', (req, res) => {
    try {
        var data = [req.body.id];
        var sql = 'DELETE FROM spend_items WHERE id = ?';
        db.query(sql, [data], (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})


module.exports = router;
