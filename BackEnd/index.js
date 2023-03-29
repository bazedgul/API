const express = require("express");
const axios = require("axios");
const app = express();
const port = 8080;

var cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/search/:term", (req, res, next) => {
  const searchTerm = req.params.term;
  const config = {
    headers: {
      "X-RapidAPI-Key": "33ddbc18d6mshd396dbfa2f7c8a7p154a42jsna585a2cd436d",
      "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
    },
  };
  axios
    .get(
      "https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=" +
        searchTerm,
      config
    )
    .then(function (response) {
        console.log(response);
      res.json(response.data);
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
