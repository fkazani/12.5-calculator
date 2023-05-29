// importing the necessary functions 
import db from "../models";

const Entries = db.entries;
const Op = db.Sequelize.op;

// Create and save a new entry
exports.create = (req, res) => {
    // Validate request
    if (!req.body.date) {
        res.status(400).semd({
            message: "Date cannot be empty!"
        });
        return;
    }

    // Create an entry
    const entry = {
        date: req.body.date,
        source: req.body.source,
        enteredAmount: req.body.enteredAmount,
        calculatedAmount: req.body.calculatedAmount
    };

    //Save an entry in the database
    entry.create(entry).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: 
                err.message || "Some error occured while creting the entry"
        });
    });
};

// Retrieve all entries from the datavase
exports.findAll = (req, res) => {

};

// FInd a sinfle entry with an ID
exports.findOne = (req, res) => {

};

// Update an entry by the ID
exports.update = (req, res) => {
    
};

// Delete an entry with a specified ID
exports.delete = (req, res) => {

};

// Delete all entries from the database
exports.deleteAll = (req, res) => {

};

// Find all punlished entries 
exports.findAllPblished = (req, res) => {

};