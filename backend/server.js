const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const vehicleRoutes = express.Router();
const PORT = 3000;
const multer = require("multer"); //image
let Vehicle = require('./vehicle.model');

app.use(cors());
app.use(bodyParser.json());




mongoose.connect('mongodb://127.0.0.1:27017/vehicles', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


vehicleRoutes.route('/').get(function(req, res) {
    Vehicle.find(function(err, vehicle) {
        if (err) {
            console.log(err);
        } else {
            res.json(vehicle);
        }
    });
});

vehicleRoutes.route('/:id').get(function(req,res) {
    let id = req.params.id; 
    Vehicle.findById(id, function(err, vehicle){
        res.json(vehicle)
    });
});

// added upload part
vehicleRoutes.route('/update/:id').put(function(req, res){
    Vehicle.findById(req.params.id, function(err, vehicle){
        console.log("here");
        if(!vehicle)
            res.status(404).send("data not found");
         else 
            vehicle.vehicle_make = req.body.vehicle_make; 
            vehicle.vehicle_model = req.body.vehicle_model; 
            vehicle.vehicle_colour = req.body.vehicle_colour; 
            vehicle.vehicle_year = req.body.vehicle_year; 
            vehicle.vehicle_url = req.body.vehicle_url;
            vehicle.vehicle_description = req.body.vehicle_description;

            vehicle.save().then(vehicle => {
                res.json('Vehicle Updated');
            }) .catch(err => {
                res.status(400).send('Update not Possible')
            });
        
    });
});

vehicleRoutes.route('/delete-vehicle/:id').delete((req, res, next) => {
    Vehicle.findByIdAndRemove(req.params.id, (error, vehicle) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: vehicle
        })
      }
    })
  })

vehicleRoutes.route('/add').post(function(req, res){
    let vehicle = new Vehicle({
        vehicle_make: req.body.vehicle_make,
        vehicle_model: req.body.vehicle_model,
        vehicle_colour: req.body.vehicle_colour,
        vehicle_year: req.body.vehicle_year,
        vehicle_description: req.body.vehicle_description,
        vehicle_url: req.body.vehicle_url
    });


    vehicle.save().then(vehicle=> {
        res.status(200).json({'todo': 'vehicle added successfully'});
    }).catch(err => {
        res.status(400).send('adding new vehicle failed');
    });
});

app.use('/vehicles', vehicleRoutes);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});