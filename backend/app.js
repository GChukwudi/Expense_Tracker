const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const { readdirSync } = require('fs');
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 6000;

// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World')
})

// Routes
readdirSync('./routers').map((r) => app.use('/api/v1', require(`./routers/${r}`)))

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('Server is listening on port:', PORT)
})
}


server()