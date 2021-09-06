var express = require('express');
var router = express.Router();
var fsm = require('../lib/fsm');

/* GET users listing. */
router.get('/:symbol', function(req, res, next) {
  const { symbol } = req.params;

  console.log(symbol);

  const data = fsm.symbolData.get(symbol);

  if (!data) throw new Error("SYMBOL NOT FOUND");

  res.status(200).json({
    success: true,
    data
  });
});

module.exports = router;
