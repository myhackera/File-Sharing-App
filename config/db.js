require('dotenv').config();
const mongoose = require('mongoose');

async function connectDB() {

    // Database connection 🥳
    await mongoose.connect(process.env.MONGO_CONNECTION_URL, 
        { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        }).then(()=>{
            console.log('Connection Established...');
        }).catch((err)=>{
            console.log(err);
        });

}

module.exports = connectDB;