const express = require('express')
const ClientRoute = express.Router()



ClientRoute.get("/", (req, res) => {
    try {
        return res.status(200).json({message:"client route page"})
    } catch (error) {
        return res.status(400).json({message:error})
    }
})




module.exports = ClientRoute