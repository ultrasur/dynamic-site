const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "views" directory
app.use(express.static(path.join(__dirname, "views")));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.post("/calculate", (req, res) => {
  const number = parseFloat(req.body.number);
  const square = number * number;
  res.send(`<h1>The square of ${number} is ${square}</h1><a href="/">Go Back</a>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});