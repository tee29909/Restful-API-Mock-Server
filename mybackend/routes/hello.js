var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:mass', function (req, res, next) {
  const { params } = req
  res.json({ 'mass': "55555", params });
  console.log(next)
});

module.exports = router;
