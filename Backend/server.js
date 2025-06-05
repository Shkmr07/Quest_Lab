const express = require("express");
const connectDB = require("./config");
const router = require("./src/routes/combine.routes");
const cors = require("cors")
require("dotenv").config();

const app = express();

app.use(cors())
app.use(express.json());
app.use("/api",router)

app.get("/", (req, res) => {
  res.send("🎯 Welcome to Quest Lab Assignment");
});

connectDB()
  .then(() => {
    app.listen(3000, () => console.log("🚀 Server is running at 3000"));
  })
  .catch((err) => {
    console.error(`Error happend connected to server: ${err.message}`);
  });
