//import dependencies
import express from "express";
import helmet from "helmet";
import fetch from "node-fetch";

//set app type and port
const app = express();
const port = process.env.PORT || 3001;

//make app use helmet for security
app.use(helmet());

//get function which listens on /search/, acting as a
//forwarding function to interface with the external API
app.get("/search/", async function (req, res) {
  //dynamically construct the URL based on given parameters
  let URL = `https://itunes.apple.com/search?term=${req.query.search}&media=${req.query.category}&limit=12`;
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  res.send(data);
});

app.listen(port, () => console.log("Listening engaged"));
