const express = require('express');
const router = express.Router();
const movieModel = require("../Model/model")
const userBookingModel = require("../Model/ProfileModel");

//Post Method
router.post('/addmovie', async (req, res) => {
    const data = new movieModel({
        pic: req.body.pic,
        title: req.body.title,
        cbfc: req.body.cbfc,
        rating: req.body.rating,
        genre: req.body.genre,
        language: req.body.language
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({ message: "Something went wrong" })
    }
})

//Get all Method
router.get('/getAllMovies', async (req, res) => {
    try {
        const data = await movieModel.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//Get by ID Method
router.get('/getOneMovie/:id', async (req, res) => {
    try {
        const dataById = await movieModel.findOne({
            _id: req.params.id
        });
        res.json(dataById);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//Update by ID Method
router.put('/updateMovie/:id', async (req, res) => {
    try {
        const data = await movieModel.findOneAndUpdate({ _id: req.params.id },
            {
                $set: req.body
            }
        )
        res.json({ message: "updated successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await movieModel.findByIdAndDelete(id);
        res.send(`Document with ${data.title} has been deleted...`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Ticket booking
router.post("/bookedtickets", async (req, res) => {
    const bookedData = new userBookingModel({
        Movie_Name: req.body.Movie_Name,
        Movie_Date: req.body.Movie_Date,
        Price_Per_Ticket: req.body.Price_Per_Ticket,
        Tickets: req.body.Tickets,
        Total_Amount: req.body.Total_Amount
    })
    try {
        const bookedDataToSave = await bookedData.save();
        res.status(200).json(bookedDataToSave);
    } catch (error) {
        res.status(400).json({ message: "Something went wrong" })
    }
})

//get booked tickets
router.get('/getAllBookedTickets', async (req, res) => {
    try {
        const data = await userBookingModel.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;