const { logger } = require('./utils')

const {
  cors,
  error500Handler,
  error404Handler,
  noContentHandler,
} = require('./middleware')

const express = require('express')

const { ore } = require('./lib')

const app = express()

app.use(logger)

app.use(cors);

app.all('/', noContentHandler)

app.get('/:number', (req, res) => {
  const number = parseInt(req.params.number) || 1
  const rolls = ore.roll(number)
  res.status(200).json({ore: rolls})
})

app.use(error500Handler);

app.all('*', error404Handler);

module.exports = { app }
