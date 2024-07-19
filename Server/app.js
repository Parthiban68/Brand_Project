const express = require('express')
require('dotenv').config()
const connectdb = require('./Config/connectDb')
const ClientRoute = require('./Route/ClientRoute/ClientRoute')
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyparser.json())
connectdb()

app.use("/user", ClientRoute)

//Test url
app.get("/", (req,res) =>{
    try {
        return res.status(200).json({message: 'Home Page'})
    } catch (error) {
        return res.status(200).json({message:error})
    }
})

app.listen(process.env.port, ()=>{
    try {
        console.log(`Server connected to port ${process.env.port}`);
    } catch (error) {
        console.log(error);
    }
})