/*htmlRoutes contains all of the routes for the  */
var express = require('express');
var Friends = require('../data/friends');
var friends = Friends.friends;
var router = express.Router();

//Modifies/weights the questions
var scoreMods = [1, 0.5, 1, 0.3, 2, 1.5, 1.2, 1, 1, 1];

//retrieves all the friends available
router.get('/api/friends', function(req, res) {
    res.send(friends);
});

//finds a compatible friend based on the questions asked
router.post('/api/friends', function(req, res) {
    let user = req.body;
    let bff = {};
    let bffSum = 0;

    for (var i = 0; i < friends.length; i++){
        var friend = friends[i];
        var sum = 0;
        for (var j = 0; j < friend.scores; j++) {
            sum += (Math.abs(friend.scores[j]-user.scores[j])*scoreMods[j]);
        }
        //lowest sum is best friend
        if (sum < bffSum) {
            bff = friend;
            bffSum = sum;
        }
    }
    friends.push(user);
    res.json(bff);
});


module.exports = router;