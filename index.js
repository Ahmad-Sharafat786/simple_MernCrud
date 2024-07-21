const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors= require("cors")
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.DB_CONNECT,{ useUnifiedTopology: true, useNewUrlParser: true })
 .then(()=>console.log("Connected to db"))
 .catch(err => console.error("Error connecting to db", err));


 //import routes

 const productRoute= require("./routes/product")
 //route middleware

 //Middleware
 app.use(express.json())
 app.use(cors())
    
 app.use("/api/products" , productRoute)

app.listen(4000, () => console.log("server is running on port 4000"));
