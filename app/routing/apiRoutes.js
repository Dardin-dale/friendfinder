/*htmlRoutes contains all of the routes for the  */
var express = require('express');
var Friends = require('../data/friends');
var friends = Friends.friends;
var router = express.Router();

//Modifies/weights the questions
var scoreMods = [1, 0.5, 1, 0.3, 2, 1.5, 1.2, 1, 1, 1];

//retrieves all the friends available
router.get('/friends', function(req, res) {
    res.json(friends);
});

//finds a compatible friend based on the questions asked
router.post('/friends', function(req, res) {
    let user = req.body;
    console.log(req.body);
    let bff = {};
    let bffSum = 100;

    for (var i = 0; i < friends.length; i++){
        var friend = friends[i];
        var scores = friend.scores;
        var sum = 0;
        console.log(scores.length);
        console.log(user.scores.length);
        for (var j = 0; j < scores.length; j++){
            var num = (Math.abs(parseInt(scores[j])-parseInt(user.scores[j]))*scoreMods[j]);
            sum += num;
            // console.log(num);
        }
        //lowest sum is best friend
        console.log(sum + '  ' + bffSum);
        if (sum < bffSum) {
            bff = friend;
            bffSum = sum;
        }
    }
    friends.push(user);
    console.log(bff);
    res.json(bff);
});


module.exports = router;