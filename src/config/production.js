const port = process.env.NODE_PORT || 4040;

module.exports = {
  port,
  bodyParser: {
    limit: '100kb',
  },
};
