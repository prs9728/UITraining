var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data={
    Name:"IronMan"
    Age:40

  }
  res.render('index', { title: 'Express' , myName:"Batman" });
});

module.exports = router;
