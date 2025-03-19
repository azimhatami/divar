const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const swaggerConfig = require('./src/configs/swagger.config');

async function main() {
  const app = express();
  const port = process.env.PORT;

  // DB connection
  require('./src/configs/mongoose.config')

  // Swagger config
  swaggerConfig(app)


  app.listen(3000, () => {
    console.log(`Server running on port ${port}: http://localhost:${port}`);
  })
}

main();
