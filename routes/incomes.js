const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/getAllIncomes', async (req, res) => {
    try {
        const sql = 'SELECT * FROM incomes';
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/getIncomeById', async (req, res) => {
    try {
        const id = req.query.id;
        const sql = 'SELECT * FROM incomes WHERE id = ?';
        db.query(sql, [id], (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.get('/getIncomesByUserId', async (req, res) => {
    try {
        const userId = req.query.user_id;
        const sql = 'SELECT * FROM incomes WHERE user_id = ?';
        db.query(sql, [userId], (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.post('/addIncome', (req, res) => {
    try {
        var data = req.body.data;
        var sql = 'INSERT INTO `incomes`(user_id, month, total) VALUES (?,?,?)';
        db.query(sql, [data.user_id, data.month, data.total], (err, result) => {
            if (err) throw err;
            res.send(result);
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
router.post('/deleteIncome', (req, res) => {
    try {
        var data = [req.body.id];
        var sql = 'DELETE FROM incomes WHERE id = ?';
        db.query(sql, [data], (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
router.post('/updateIncome', (req, res) => {
    try {
        const { total, month, user_id, id } = req.body.data;
        const sql = 'UPDATE incomes SET user_id = ?, month = ?, total = ? WHERE id = ?';
        db.query(sql, [user_id, month, total, id], (err, result) => {
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
