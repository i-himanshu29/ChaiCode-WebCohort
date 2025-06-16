// index.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

// takes params from url and returns a response
app.get("/:id", (req, res) => {
  res.send(`Hello World ${req.params.id}`);
});

// Only listen if not in test
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
