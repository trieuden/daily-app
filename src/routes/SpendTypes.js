const express = require('express');
const router = express.Router();
const db = require('../../db');

router.get('/getAllSpendTypes', async (req, res) => {
  try {
    const sql = 'SELECT * FROM spend_types';
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get('/getSpendTypeById', async (req, res) => {
  try {
      const id = req.query.id;
      const sql = 'SELECT * FROM spend_types WHERE id = ?';
      db.query(sql, [id], (err, result) => {
          if (err) throw err;
          res.send(result);
      });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

router.post('/addSpendType', (req, res) => {
  try {
      var data = req.body.data;
      var sql = 'INSERT INTO `spend_types`(name, image, price, status) VALUES (?,?,?,?)';      
      db.query(sql, [data.name, data.image, data.price, data.status], (err, result) => {
          if (err) throw err;
          res.send(result);
      })
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
})

module.exports = router;
