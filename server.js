const { logger } = require('./utils')
const { cors } = require('./middleware')
const express = require('express')

const app = express()

app.use(logger)

app.use(cors);


app.all('*', (req, res) => {
  res.status(404).send('Not found', 404);
});
