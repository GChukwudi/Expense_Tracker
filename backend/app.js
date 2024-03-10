
require('dotenv').config()

const PORT = process.env

const server = () => {
    console.log(`Server is running on port: ${PORT}`)
}


server()