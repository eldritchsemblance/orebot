const { log } = require('../utils')

const error500Handler = (err, req, res, next) => {
  log.error(`${err.message}`)
  res.status(500).json({ error: 'Something went wrong.' })
}

const error404Handler = (req, res) => {
  res.status(404).json({ error: 'Not found.' })
}

module.exports = { error500Handler, error404Handler }
