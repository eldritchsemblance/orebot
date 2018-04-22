const { /*PORT,*/ TOKEN } = require('./config')

//const { app } = require('./server')
const { oreBot } = require('./lib')

oreBot.login(TOKEN)
//app.listen(PORT)
