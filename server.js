const app = require("./app");
require("dotenv").config();
const PORT = process.env.PORT;

const start = async () => {
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
};

start();
