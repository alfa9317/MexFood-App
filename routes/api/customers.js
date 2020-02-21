const router = require("express").Router();
const customersController = require("../../controllers/customersController");

router.route("/api/customers")
  .get(customersController.findAll);

router.route("/api/customers/:id")
  .get(customersController.findById)

router.route("/api/newCustomer")
  .post(customersController.create);

module.exports = router;
