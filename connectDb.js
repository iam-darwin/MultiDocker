const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.DB_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Mongodb connected....');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connect;
