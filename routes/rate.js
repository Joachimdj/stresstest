var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var balance = req.query.balance;

  var interest = 0;

  if(balance >= 0 && balance <= 100)
  {
      interest = balance * 0.03;
  }
  else if(balance > 100 && balance < 1000)
  {
      interest = balance * 0.05;
  }
  else if(balance >= 1000)
  {
      interest = balance * 0.07;
  }

  res.send(interest.toString());
});

module.exports = router;
