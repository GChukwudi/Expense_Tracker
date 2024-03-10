const ExpenseSchema = require('../model/expenseModel');


exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body
    try {
        if(!title || !category || !description || !date || isNaN(amount) || amount <= 0) {
            return res.status(400).json({message: 'All fields are required'})
        }
        const expense = ExpenseSchema({
            title,
            amount,
            category,
            description,
            date
        });

        await expense.save()
        res.status(200).json({message: 'Expense added successfully'})
    }catch (error) {
        console.log('Error adding expense', error)
        res.status(500).json({message: 'Internal server error'})
    }
}

exports.getExpense = async (req, res) => {
    try {
        const expense = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json({expense})
    } catch (error) {
        res.status(500).json({message: 'Internal server error'})
    }
}

exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((expense) => {
            res.status(200).json({message: 'Expense deleted successfully'})
        })
        .catch((error) => {
            res.status(500).json({message: 'Internal server error'})
        })
}