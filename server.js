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
  res.status(200).json({ore: rolls})
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
  if (message.content.substring(0,5) === '/ore ') {
    const number = parseInt(message.content.substring(5)) || 1
    const roll = ore.roll(number)
    const header = `\nRolling ${number}d: [${roll.rolls.join()}]`
    const sets = roll.sets.length ? `Sets: [${roll.sets.map((set) => {
      return ore.stringify(set)
    }).join()}]` : 'No sets rolled.'

    const widest = roll.widestSets ? `Widest Sets: [${
      roll.widestSets.map((set) => {
        return ore.stringify(set)
      }).join()
    }]`: ''

    const tallest = roll.tallestSet ? `Tallest Set: ${
      ore.stringify(roll.tallestSet)
    }` : ''

    const rollText = [
      header,
      sets,
      widest,
      tallest,
    ].filter((text) => {
      return text
    }).join('\n')

    message.reply(rollText)
  }
})

bot.login(process.env.TOKEN || '')

app.listen(process.env.PORT || 80)
