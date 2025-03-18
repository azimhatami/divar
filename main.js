const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

async function main() {
  const app = express();
  const port = process.env.PORT;

  require('./src/configs/mongoose.config')

  app.listen(3000, () => {
    console.log(`Server running on port ${port}: http://localhost:${port}`);
  })
}

main();
