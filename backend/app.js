const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 6000;

// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World')
})

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('Server is listening on port:', PORT)
})
}


server()