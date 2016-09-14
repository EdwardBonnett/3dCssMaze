var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:level?', function(req, res, next) {
    var level = req.params.level;

    if (level == undefined){
        level = 1;
    }
    
   
    if (isNaN(Number(level)))
        return;
        
    if (level == 6)
    {
        res.render('complete');
        return;
    }
        
    var maze = require('../mazes/maze' + level + '.json');
    res.render('index', maze);
});

module.exports = router;
