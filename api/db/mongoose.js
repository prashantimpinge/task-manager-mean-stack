// This file will handle connection logic to the MongoDB database

const mongoose = require('mongoose');

// function to connect with db
async function connectToDb(url) {
    await mongoose.connect(url, { useNewUrlParser: true });
    console.log("Connected to MongoDB successfully :)");
    const connection = mongoose.connection;
    connection.on('error', () => {
        console.log("Error while attempting to connect to MongoDB");
        console.log(e);
    });
}
// To prevent deprectation warnings (from MongoDB native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);


module.exports = {
    connectToDb
};