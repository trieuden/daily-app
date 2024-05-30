const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/getAllRoles', async (req, res) => {
  try {
    const sql = 'SELECT * FROM roles';
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/getRoleById', async (req, res) => {
  try {
    const roleId = req.query.id;
    const sql = 'SELECT * FROM roles WHERE id = ?';
    db.query(sql, [roleId], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.post('/addRole', (req, res) => {
  try {
    var data = [req.body.name];
    var sql = 'INSERT INTO `roles`(`name`) VALUES (?)';
    db.query(sql, [data], (err, result) => {
      if (err) throw err;
      res.send(result);
    })
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})
router.post('/deleteRole', (req, res) => {
  try {
    var data = [req.body.id];
    var sql = 'DELETE FROM roles WHERE id = ?';
    db.query(sql, [data], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})


module.exports = router;
