// Import the necessary modules
import entries from "../controllers/entries.controller.js";
import express from "express";

const entriesRoutes = app => {
    const router = express.Router();

    // Create a new entry
    router.post("/", entries.create);

    app.use('/api/entries', router);
};

export default entriesRoutes;

// // Creating a router variable
// const router = express.Router();

// // Create a new entry when form is submitted
// router.post('/submit_form', async (req, res) => {
//     const { date, source, enteredAmount, calculatedAmount } = req.body;
  
//     // Create a new entry record in the database
//     entries.create ({ date, source, enteredAmount, calculatedAmount
//     }).then((entry) => {
//       res.send('Entry ${source} created successfully!');
//     }).catch((err) => {
//       res.send('Error: ' + err.message);
//     });
//   });

// export default router;


