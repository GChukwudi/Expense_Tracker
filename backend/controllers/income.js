const IncomeSchema = require('../model/incomeModel')

// Add income
exports.addIncome = async (req, res) => {
    // console.log(req.body)
    const {title, amount, category, description, date} = req.body

    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })
    console.log(income)
}