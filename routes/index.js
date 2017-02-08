var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    
    var myData= [
        {'name':'mahesh'},
        {'name':'Rohan'},
        {'name':'Anmol'},
        {'name':'Dev'},
        {'name':'Nirmal'},
        {'name':'Avinash'},
        {'name':'pranay'},
        {'name':'bikash'},
    ]
  res.render('index', { title: 'Express',data:myData,layout:"layout"});
});

router.get('/dashboard', function(req, res, next) {
      res.render('dashboard',{title: 'Express',layout:"layout2"});
});

module.exports = router;
