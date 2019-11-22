var express = require('express');
var router = express.Router();

Orders = require('../models/Order');

/* GET orders listing. */
router.get('/', function(req, res, next) {
  
  if (!req.session.user) {
    res.json("unauthorized")
  }
  else {
    Orders.find()
      .then(orders => {
        res.json(orders);
      })
      .catch(err => {
        console.log('GET ORDER ERROR: ', err);
      })
  }

});

/* POST order. */
router.post('/', (req, res, next) => {
  const newOrder = new Orders({
    FoodItem: req.body.food,
    CustomerName: req.body.name,
    PhoneNumber: req.body.phone,
    PickupOrDelivery: req.body.pickOrDel,
    Address: req.body.address
  })
  newOrder
    .save()
    .then(order => {
      res.json({order, msg: 'Success'})
    })
    .catch(err => {
      console.log('CREATE ORDER ERROR: ', err);
    });
})

module.exports = router;