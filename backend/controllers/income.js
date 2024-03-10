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
    
    try {
        // validations
        if(!title || !category || !description || !date) {
            return res.status(400).json({message: 'All fields are required'})
        }
        if(amount <= 0 || !amount === Number) {
            return res.status(400).json({message: 'Amount is required'})
        }
        await income.save()
        res.status(200).json({message: 'Income added successfully'})
    }catch (error) {}

    console.log(income)
}