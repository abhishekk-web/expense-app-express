const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json({extended: false}))
app.use(cors());
const sequelize = require('./utils/database');

const expenseRoutes = require('./routes/expense');

app.use("/expense",expenseRoutes);

sequelize.sync()
.then(result=> {
    // console.log(result)
    app.listen(3000);
})
.catch(err=> {
    console.log(err);
})