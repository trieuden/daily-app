const express = require('express');
const router = express.Router();
const db = require('../../db');

router.get('/getAllNotifications', async (req, res) => {
  try {
    const sql = 'SELECT * FROM notifications';
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/getNotificationById', async (req, res) => {
  try {
    const roleId = req.query.id;
    const sql = 'SELECT * FROM notifications WHERE id = ?';
    db.query(sql, [roleId], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.post('/addNotification', (req, res) => {
  try {
    var data = req.body.data;
    var sql = 'INSERT INTO `notifications`(`title, content, created_date, status, user_id`) VALUES (?,?,?,?,?)';
    db.query(sql, [data,title, data.content, data.created_date, data.status, data.user_id], (err, result) => {
      if (err) throw err;
      res.send(result);
    })
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})
router.post('/deleteNotification', (req, res) => {
  try {
    var data = [req.body.id];
    var sql = 'DELETE FROM notifications WHERE id = ?';
    db.query(sql, [data], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})


module.exports = router;
