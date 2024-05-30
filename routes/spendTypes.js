const express = require('express');
const router = express.Router();
const db = require('../db');

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

module.exports = router;
