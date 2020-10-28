'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { handleJoke } = require("./handlers");
const { getDadJoke} = require("./__workshop/exercise-4.1")
const { getTronaldDumpQuote } = require("./__workshop/exercise-4.2")
const { getGeekJoke}  = require("./__workshop/exercise-4.3")

express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('dev'))
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .set('view engine', 'ejs')

  // endpoints
  .get("/joke/:id", async(req,res) => {
    const jokeType = req.params.id
    if (jokeType === "dad") {
    let dadJoke = await getDadJoke()
    return res.status(200).json({status: 200, message: dadJoke})
    }
    else if (jokeType === "trump") {
      let tronaldDumpQuote = await getTronaldDumpQuote()
      return res.status(200).json({status: 200, message: tronaldDumpQuote})
    }
    else if (jokeType === "geek") {
      let geekJoke = await getGeekJoke()
      return res.status(200).json({status: 200, message: geekJoke})
    }
    else {
      return res.status(200).json({status: 404, message: "This type of joke was not found."})
    }
  })

  .listen(8000, () => console.log(`Listening on port 8000`));
