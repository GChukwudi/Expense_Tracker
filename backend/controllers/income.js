const IncomeSchema = require('../model/incomeModel')

// Add income
exports.addIncome = async (req, res) => {
    // console.log(req.body)
    const { title, amount, category, description, date } = req.body
    
    try {
        // validations
        if(!title || !category || !description || !date || isNaN(amount) || amount <= 0) {
            return res.status(400).json({message: 'All fields are required'})
        }
        const income = IncomeSchema({
            title,
            amount,
            category,
            description,
            date
        });

        await income.save()
        res.status(200).json({message: 'Income added successfully'})
    }catch (error) {
        console.log('Error adding income', error)
        res.status(500).json({message: 'Internal server error'})
    }
    // console.log(income)
}