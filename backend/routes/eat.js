const router = require('express').Router();
let Eat = require('../models/eat.model');


router.route('/').get((req, res) => {
  Eat.find()
    .then(eats => res.json(eats))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const username = req.body.username;


  const newUser = new User({username});


  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;