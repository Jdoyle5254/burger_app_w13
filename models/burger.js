var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(name, cb) {
    orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], function(res) {
      cb(res);
    });
  },
//   feed updateOne burger ID to set devoured to true; 
  updateOne: function(id, cb) {
      var condition = "id=" + id
    orm.updateOne("burgers", {devoured: true}, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;

