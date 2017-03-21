var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var newCustomer = req.query.new;
  var loyaltyCard = req.query.card;
  var coupon = req.query.coupon;

  var discount = 0;

  if (newCustomer == "true") {
    discount = 15;

    if (coupon == "true") {
      discount = 20;
    }

    if (loyaltyCard == "true") {
      discount = 0;
    }

  }else {

    if (coupon == "true") {
      discount = 20;
    }

    if (loyaltyCard == "true") {
      discount += 10;
    }

  }
  res.send(discount.toString());
});

module.exports = router;
