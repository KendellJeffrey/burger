var orm = require("../config/orm.js");
var burger = {
  selectAll: function(cb) {
    orm.selectAll("bgs", function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne("bgs", cols, vals, function(res) {
      cb(res);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("bgs", objColVals, condition, function(res) {
      cb(res);
    });
  },

  deleteOne: function(condition, cb) {
    orm.deleteOne("bgs", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
