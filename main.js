const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const swaggerConfig = require('./src/configs/swagger.config');
const mainRouter = require('./src/app.routes');
const NotFoundHandler = require('./src/commons/exceptions/notfound.handler');
const AllExceptionsHandler = require('./src/commons/exceptions/exceptions.handler');
const cookieParser = require('cookie-parser');


async function main() {
  const app = express();
  const port = process.env.PORT;

  // DB connection
  require('./src/configs/mongoose.config')

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(cookieParser(process.env.COOKIE_SECRET_KEY))

  // Swagger config
  swaggerConfig(app)

  // Route
  app.use(mainRouter)


  // Error Handling
  NotFoundHandler(app)
  AllExceptionsHandler(app)

  app.listen(3000, () => {
    console.log(`Server running on port ${port}: http://localhost:${port}`);
  })
}

main();
