const mongoose = require('mongoose');


const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 100,
        trim : true
    },
    type: {
        type: String,
        default: 'expense'
    },
    date: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        maxLength: 100,
        trim: true
    }, 
}, {timestamps: true}
)

module.exports = mongoose.model('Expense', ExpenseSchema)
