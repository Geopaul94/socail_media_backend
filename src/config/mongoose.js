const mongoose = require('mongoose')
const nodemon = require('nodemon');
// @desc    Mongoose configuration
// @file   < Config >
// @access  Private


const connect = async() => {
    try {
        await mongoose.connect("mongodb+srv://geopaul:geopaul@cluster0.sejthun.mongodb.net/klik?retryWrites=true&w=majority&appName=Cluster0")
        console.log('mongoDB is connected');
    } catch (error) {
        console.log(error);
        nodemon.restart();
    }
}

module.exports = connect;

