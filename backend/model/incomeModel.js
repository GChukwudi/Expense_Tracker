const mongoose = require('mongoose');


const IncomeSchema = new mongoose.Schema({
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
        default: 'income'
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
        maxLength: 20,
        trim: true
    }, 
}, {timestamps: true}
)

module.exports = mongoose.model('Income', IncomeSchema)
