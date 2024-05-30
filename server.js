const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const roles = require('./routes/roles');
const users = require('./routes/users');
const spendTypes = require('./routes/spendTypes')
const spends  = require('./routes/spends');
const spendItems = require('./routes/spendItems')

const db = require('./db');

const app = express();

app.use(bodyparser.json());
app.use(cors());

app.use('/roles', roles);
app.use('/users', users);
app.use('/spendTypes', spendTypes);
app.use('/spends', spends);
app.use('/spendItems', spendItems);


const ip = process.env.SERVER_IP || '10.10.0.63';

const port = 3306; // Chọn một cổng để lắng nghe
app.listen(port, ip, () => {
  console.log(`Server đang lắng nghe trên port ${port}`);
});
