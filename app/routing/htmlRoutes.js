/*htmlRoutes contains all of the routes for the  */
var express = require('express');
var path = require('path');
var router = express.Router();

//routes to home page.
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
});

//doesn't seem necessary currently
// router.get('*', function(req, res) {;
//     res.sendFile(path.join(__dirname, '../public/home.html'));
// });

//routes to survey page.
router.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname, '../public/survey.html'));
});


module.exports = router;