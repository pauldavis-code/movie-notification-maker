//EXPRESS

const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//CONNECT

app.listen(PORT, function() {
  console.log(`connected @ PORT ${PORT}`)
});


