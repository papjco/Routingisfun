var express = require('express');
var router = express.Router();
var storyLine = require('../models/storyLine');

router.get('/', function (req, res, next) {
    res.render('index');
    console.log(req.url);
});
router.get('/beginning', function (req, res, next) {
     let story = storyLine.story.find(peep => {
         return peep.storyPart == 'beginning';
    });

    res.render('beginning', { story });
    console.log(req.url);
});
router.get('/middle', function (req, res, next) {
    let story = storyLine.story.find(peep => {
        return peep.storyPart === parseInt(req.params.storyPart);
    });
    res.render('middle', { story });
    console.log(req.url);
});
router.get('/end', function (req, res, next) {
    let story = storyLine.story.find(peep => {
        return peep.storyPart === parseInt(req.params.storyPart);
    });
    res.render('end', { story });
    console.log(req.url);
});
module.exports = router;
