const mongoose = require('mongoose');
require("dotenv").config();

const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
        console.log('Connected to Mongo Successfully');
    } catch (error) {
        console.error('MongoDB Connection Error:', error);
    }
}

module.exports = connectToMongo;
