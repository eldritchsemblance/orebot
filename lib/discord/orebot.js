const Discord = require('discord.js')
const { log } = require('../../utils')
const ore = require('../ore')

const MAX_LENGTH = 2000
const TOO_LONG = `Too many dice.  Discord only allows ${MAX_LENGTH} characters.`

const oreBot = new Discord.Client()

const stringifySets = (sets) => {
  return sets.map((set) => {
    return ore.stringify(set)
  }).join()
}

const getPluralOpening = (shouldPluralize) => {
  return `${ shouldPluralize ? 's': ''}: ${shouldPluralize ? '[' : ''}`
}

const getPluralClosing = (shouldPluralize) => {
  return shouldPluralize ? ']' : ''
}

const generateReply = (message) => {
  const number = parseInt(message.content.substring(5)) || 1
  const roll = ore.roll(number)
  const header = `\nRolling ${number}d: [${roll.rolls.join()}]`

  const setsCount = roll.sets ? roll.sets.length : 0
  const shouldPluralizeSets = setsCount > 1

  const setsOpening = `Set${
    shouldPluralizeSets ? 's': ''
  }: ${shouldPluralizeSets ? '[' : ''}`

  const setsClosing = shouldPluralizeSets ? ']' : ''

  const sets = roll.sets.length ? `${setsOpening}${
    stringifySets(roll.sets)
  }${setsClosing}` : 'No sets rolled.'

  const widestSetsCount = roll.widestSets ? roll.widestSets.length : 0
  const shouldPluralizeWidestSets = widestSetsCount > 1

  const widestOpening = `Widest Set${
    shouldPluralizeWidestSets ? 's': ''
  }: ${shouldPluralizeWidestSets ? '[' : ''}`

  const widestClosing = shouldPluralizeWidestSets ? ']' : ''

  const widest = roll.widestSets && shouldPluralizeSets ? `${widestOpening}${
    stringifySets(roll.widestSets)
  }${widestClosing}`: ''

  const tallest = roll.tallestSet && shouldPluralizeSets ? `Tallest Set: ${
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

  return rollText
}

const replyToMessage = (message) => {
  const reply = generateReply(message)
  const isMessageSafe = reply.length <= MAX_LENGTH
  let content = isMessageSafe ? reply : TOO_LONG
  try {
    message.reply(content)
  } catch (error) {
    log.error(`Error sending message: ${error}, content: ${message.content}`)
  }
}

oreBot.on('ready', (evt) => {
  log.info(`Logged in as ${oreBot.user.tag}!`)
})

oreBot.on('message', (message) => {
  if (message.content.substring(0,5) === '/ore ') {
    replyToMessage(message)
  }
})

module.exports = { oreBot }
