require('dotenv').config()
const { logger } = require('./utils')
const { cors } = require('./middleware')
const express = require('express')
const Discord = require('discord.io')

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


const bot = new Discord.Client({
  token: process.env.TOKEN,
  autorun: true
})

bot.on('message', (user, userID, channelID, message, evt) => {
  // Our bot needs to know if it will execute a command
  // It will listen for messages that will start with `!`
  if (message.substring(0, 4) == '/ore') {
    const args = message.substring(5).split(' ');
    const cmd = args[0];

    const number = args ? Number.parseInt(args) : 1

    const rolls = ore.roll(number)
    const sets = rolls.rolls.sets.map((set) => {
      return ore.stringify(set)
    })

    const rollText = `${user} rolls ${number}d: ${ rolls.rolls.join()}${sets.length ? `, ${sets.join()}` : ''}`

    bot.sendMessage({
      to: channelID,
      message: rollText
    })
  }
})

app.listen(process.env.PORT || 80)
