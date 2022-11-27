const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
let database = async () => {
    let connection =`mongodb+srv://benazirsultana:${process.env.MONGO_DB_URL}G@cluster0.ahhggvd.mongodb.net/?retryWrites=true&w=majority`
    mongoose.connect(connection, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('Connected to database'))
        .catch(err => console.log(err));
}

module.exports = database;
