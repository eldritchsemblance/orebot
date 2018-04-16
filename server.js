const { logger } = require('./utils')
const { cors } = require('./middleware')
const express = require('express')

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
  res.status(404).send('Not found.');
});

app.listen(3000)
