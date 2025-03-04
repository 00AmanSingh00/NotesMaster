require("dotenv").config();
const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

connectToMongo();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: [process.env.FRONTEND_DEV, process.env.FRONTEND],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

// ✅ Fix: Mounting routes at `/api/auth` and `/api/notes`
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

// ✅ Handle frontend routing for production
if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") {
  const path = require("path");
  app.use(express.static(path.join(__dirname, "../Frontend/dist")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend/dist/index.html"));
  });
}

app.listen(port, () => {
  console.log(`DevNotes Backend listening at port ${port}`);
});
