const NotFoundHandler = (app) => {
  app.use((req, res, next) => {
    res.status(404).json({
      message: 'Route not found',
    })
  })
};


module.exports = NotFoundHandler
