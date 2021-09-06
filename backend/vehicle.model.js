const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Vehicle = new Schema({
    vehicle_make: {
        type: String
    },
    vehicle_model: {
        type: String
    },
    vehicle_year: {
        type: String
    },
    vehicle_colour: {
        type: String
    }, 
    vehicle_description: {
        type: String
    },
    vehicle_url: {
        type: String
    }
    
});

module.exports = mongoose.model('Vehicle', Vehicle);