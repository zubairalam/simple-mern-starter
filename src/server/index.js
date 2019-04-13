
import express from 'express';
import models, { connectDb } from './models';
const os = require("os");
const axios = require("axios");


const app = express();

app.use(express.static("dist"));
app.get("/api/getUsername", (req, res) => {
    res.send({ username: os.userInfo().username })
});

async function getData() {
  try {
    let respone = await axios.get("https://www.google.com");
    return data;
  } catch(error) {
    console.log(error);
  }
}


app.listen(8080, () => console.log("Listening on port 8080!"));