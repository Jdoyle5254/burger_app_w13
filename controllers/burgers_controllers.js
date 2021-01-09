var express = require("express");
var burger = require("../models/burger.js")

var app = express.Router();

app.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var burgerObject = {
        burgers: data
      };
      console.log(burgerObject);
      res.render("index", burgerObject);
    });
  });
  
  app.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.name, function(result) {
      // Send back the ID of the new burger
      console.log("new name burger:", burger);
      res.json({ id: result.insertId });
    });
  });
  
  app.put("/api/burgers/:id", function(req, res) {
    burger.updateOne(
      req.params.id, function (result) {
        console.log(result)
      }
    )
    });
    // var condition = "id = " + req.params.id;
  
    // console.log("condition", condition);
  
  //   burger.updateOne({
  //     devoured: req.body.devoured
  //   }, condition, function(result) {
  //     if (result.changedRows == 0) {
  //       // If no rows were changed, then the ID must not exist, so 404
  //       return res.status(404).end();
  //     } else {
  //       res.status(200).end();
  //     }
  //   });
  // });
  
  // Export routes for server.js to use.
  module.exports = app;
  
