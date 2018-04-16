require('dotenv').config()

const PORT = process.env.PORT || 80
const TOKEN = process.env.TOKEN || ''

module.exports = { PORT, TOKEN }
