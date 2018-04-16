require('dotenv').config()
const { logger } = require('./utils')
const { cors } = require('./middleware')
const express = require('express')
const Discord = require('discord.js')

const { ore } = require('./lib')

const app = express()

app.use(logger)

app.use(cors);

app.get('/:number', (req, res) => {
  const number = parseInt(req.params.number) || 1
  const rolls = ore.roll(number)
  res.status(200).json(rolls)
})

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send('Something went wrong.')
});

app.all('*', (req, res) => {
  res.status(404).send('Not found.')
});


const bot = new Discord.Client()

bot.on('ready', (evt) => {
  console.info(`Logged in as ${bot.user.tag}!`)
})

bot.on('message', (message) => {

      message.reply('Pong!')

})

bot.login(process.env.TOKEN || '')

app.listen(process.env.PORT || 80)
