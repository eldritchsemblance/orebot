const noContentHandler = (req, res) => {
  res.status(204).end()
}

module.exports = { noContentHandler }
