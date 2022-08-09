require("dotenv").config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const SERVER_APIKEY = process.env.SERVER_APIKEY;

module.exports = { PORT, MONGODB_URI, SERVER_APIKEY };
