const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Customer.findAll().then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  },
  findById: function(req, res) {
    db.Customer.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  },
  create: function(req, res) {
    db.Customer.findOne({
      where: {
        email: req.body.email
      }
    }).then(function(dbCust) {
      if (!dbCust) {
        db.Customer.create(req.body).then(function() {
          res.json("Customer registered successfully");
        });
      } else {
        res.json("There is a customer registered with same email");
      }
    });
  }
};
