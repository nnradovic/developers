const express = require('express');
const connectDB = require('./config/db')

//Server UP
const app = express()

//Connect Database
connectDB()

//Respones route to FRONT 
app.get('/', (req,res)=>res.send('API Runing'));

//Server runs on port 
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));