require('dotenv').config()
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const roles = require('./src/routes/Roles');
const users = require('./src/routes/Users');
const spendTypes = require('./src/routes/SpendTypes')
const spends  = require('./src/routes/Spends');
const spendItems = require('./src/routes/SpendItems')
const notifications = require('./src/routes/Notifications')
const incomes = require('./src/routes/Incomes')
const icomeItems = require('./src/routes/IncomeItem')

const db = require('./db');

const app = express();

app.use(bodyparser.json({ limit: '10mb' }));
app.use(cors());

app.use('/roles', roles);
app.use('/users', users);
app.use('/spendTypes', spendTypes);
app.use('/spends', spends);
app.use('/spendItems', spendItems);
app.use('/notifications', notifications);
app.use('/incomes', incomes);
app.use('/incomeItems', icomeItems);


const ip = process.env.SERVER_IP || '10.10.0.63';

const port = 3306; // Chọn một cổng để lắng nghe
app.listen(port, ip, () => {
  console.log(`Server đang lắng nghe trên port ${port}`);
});
