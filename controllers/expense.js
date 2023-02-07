const Expense = require('../models/expense');

exports.postExpense =  async (req, res) => {

    try{

    const {expense, description, category}= req.body;
    console.log(expense);
    Expense.create({expense:expense, description:description, category:category})
    res.status(200).json({success: true, message: "Data updated", data:req.body});
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

        Expense.destroy({where:{id: expenseId}})
        return res.status(200).json({success: true, message: "deleted successfully"});

        // Expense.findAll({where: {id:expenseId}})
        // .then(expense => {

        //     return expense.destroy()

        // })
        // .then(()=> {
        //     return res.status(200).json({success: true, message: "deleted successfully"});
        // })
        

    }
    catch(err) {

        console.log(err);

    }

}