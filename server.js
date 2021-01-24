const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://piotr-admin:1234@cluster0.h5mqg.mongodb.net/ProjektTI_sem7");

// mongoose.connection.on('connected',()=>{
//     console.log('Connected to database mongodb!!!);
// });

app.use("/", require("./routes/tripRoute.js"));

app.listen(3001, function() {
    console.log("express server is running on port 3001");
})