const mongoose = require('mongoose')

const connectDb = () => {
    
    mongoose.connect(process.env.Db_url)

    try {
        mongoose.connection.on('connected', () => {
            console.log('MongoDb Connected Succesfully');
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb