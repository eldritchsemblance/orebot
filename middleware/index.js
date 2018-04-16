const { cors } = require('./cors')
const { error404Handler, error500Handler } = require('./errorhandlers')
const { noContentHandler } = require('./noContentHandler')

module.exports = {
  cors,
  error404Handler,
  error500Handler,
  noContentHandler
}
