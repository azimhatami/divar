const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const swaggerConfig = require('./src/configs/swagger.config');
const mainRouter = require('./src/app.routes');

async function main() {
  const app = express();
  const port = process.env.PORT;

  // DB connection
  require('./src/configs/mongoose.config')

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  // Swagger config
  swaggerConfig(app)

  // Route
  app.use(mainRouter)


  app.listen(3000, () => {
    console.log(`Server running on port ${port}: http://localhost:${port}`);
  })
}

main();
