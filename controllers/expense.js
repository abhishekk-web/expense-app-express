const Expense = require('../models/expense');

exports.postExpense =  async (req, res) => {

    try{

    const {expense, description, category}= req.body;
    console.log(expense);
    const data = await Expense.create({expense:expense, description:description, category:category})
    res.status(200).json({success: true, message: "Data updated", data:data});
    // console.log(expense);

    }
    catch(err){
        console.log(err);
    }

}

exports.getExpense = async (req, res) => {

    try {

        const data = await Expense.findAll();
        console.log(data);
        res.status(200).json({success:true, data:data});
        
    }
    catch(err){
        console.log(err);
    }

}

exports.deleteExpense = async (req, res) => {

    try {

        const expenseId = req.params.id;
        console.log(expenseId);

        await Expense.destroy({where:{id: expenseId}})
        return res.status(200).json({success: true, message: "deleted successfully"});

        
        

    }
    catch(err) {

        res.status(400).json({success: false, message: "not deleted"});

    }

}