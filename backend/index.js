const connectToMongo = require("./db");

connectToMongo();
const express = require("express");
const app = express();
const port = 5173;

app.use(express.json());
// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/meals", require("./routes/meals"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
