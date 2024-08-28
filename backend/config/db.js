const mongoose = require("mongoose");
const { URI, DBNAME } = require("../constants");

const ConnectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${URI}/${DBNAME}`);
    console.log(
      `Database connected successfully!! \nHost : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(
      `Error while connecting to Database \nError : ${error.message}`
    );
    process.exit(1);
  }
};

module.exports = { ConnectDB };
