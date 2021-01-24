const mongoose = require("mongoose");

const tripSchema = {
    name: String,
    dateStart: String,
    days: String,
    placeStart: String,
    placeStop: String,
    distance: String,
    description: String,
    photo1: String,
    photo2: String,
    photo3: String,
    photo4: String,
    photo5: String,
    photo6: String,
    movie: String,
}

const Trip = mongoose.model("trip", tripSchema); // pierwszy argument nazywa stworzona kolekcje

module.exports = Trip;