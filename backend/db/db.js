const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to the db');
    } catch (error) {
        console.log('Error connecting to the database');
    }
}

module.exports = {db}
