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

// Get all income
exports.getIncome = async (req, res) => {
    try {
        const income = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json({income})
    } catch (error) {
        // console.log('Error getting income', error)
        res.status(500).json({message: 'Internal server error'})
    }
}

// delete income
exports.deleteIncome = async (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    // IncomeSchema.findByIdAndDelete(id)
    //     .then((income) => {
    //         res.status(200).json({message: 'Income deleted successfully'})
    //     })
    //     .catch((error) => {
    //         // console.log('Error deleting income', error)
    //         res.status(500).json({message: 'Internal server error'})
    //     })
}
