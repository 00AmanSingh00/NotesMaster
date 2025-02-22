const connectToMongo = require("../db"); // Correct path
const express = require("express");
const cors = require("cors");
require("dotenv").config();

connectToMongo();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin: [process.env.FRONTEND_DEV, process.env.FRONTEND],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));

// Available Routes
app.use("/api/auth", require("../routes/auth")); 
app.use("/api/notes", require("../routes/notes")); 

if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") {
    app.get('/', (req, res) => {
        res.redirect(process.env.FRONTEND);
    });
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
