const express = require("express");
const router = express.Router();
const Trip = require("../models/tripModel.js");

router.route("/create").post((req, res) => {
    const name = req.body.name;
    const dateStart = req.body.dateStart;
    const days = req.body.days;
    const placeStart = req.body.placeStart;
    const placeStop = req.body.placeStop
    const distance = req.body.distance;
    const description = req.body.description;
    const photo1 = req.body.photo1;
    const photo2 = req.body.photo2;
    const photo3 = req.body.photo3;
    const photo4 = req.body.photo4;
    const photo5 = req.body.photo5;
    const photo6 = req.body.photo6;
    const movie = req.body.movie;

    const newTrip = new Trip({
        name,
        dateStart,
        days,
        placeStart,
        placeStop,
        distance,
        description,
        photo1,
        photo2,
        photo3,
        photo4,
        photo5,
        photo6,
        movie,
    });

    newTrip.save();
})

router.route("/tripList").get((req, res) => {
    Trip.find().then(foundTrips => res.json(foundTrips))
})

module.exports = router;