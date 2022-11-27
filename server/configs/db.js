const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
let database = async () => {
    let connection = "mongodb+srv://benazirsultana:7SA5Wnb2hMpizgLG@cluster0.ahhggvd.mongodb.net/?retryWrites=true&w=majority"
    mongoose.connect(connection, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('Connected to database'))
        .catch(err => console.log(err));
}

module.exports = database;
