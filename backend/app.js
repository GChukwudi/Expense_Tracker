
require('dotenv').config()

const PORT = process.env.PORT || 6000;

const server = () => {
    console.log('Server is running on port:', PORT)
}


server()