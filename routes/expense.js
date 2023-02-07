const express = require('express');
const expenseController = require('../controllers/expense');

const router = express.Router();

router.post("/addExpense", expenseController.postExpense);

router.get("/getExpense", expenseController.getExpense);

router.delete("/deleteExpense/:id", expenseController.deleteExpense);

module.exports = router;