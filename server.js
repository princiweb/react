var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var Comment = require('./models/comments');

mongoose.connect('');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;
var router = express.Router();

app.use(function(req, res, next){
  next();
});

router.route('/app')
  .get(function(req, res){

    res.sendFile(path.join(__dirname + '/views/index.html'));
  });

router.route('/assets/**')
  .get(function(req, res){

    res.sendFile(path.join(__dirname + req.url));
  });

router.route('/comments')

  .post(function(req, res){

    var comment = new Comment();
    comment.author = req.body.author;
    comment.description = req.body.description;

    comment.save(function(err){
      if(err)
        res.send(err);

      res.json({message: 'Comentário criado'});
    });
  })

  .get(function(req, res){

    Comment.find(function(err, comments){
      if(err)
        res.send(err);

      res.json(comments);
    });
  });

router.route('/comments/:comment_id')
  
  .get(function(req, res){
    Comment.findById(req.params.comment_id, function(err, comment){
      if(err)
        res.send(err);

      res.json(comment);
    });
  })

  .delete(function(req, res){
    Comment.remove({
      _id: req.params.comment_id
    }, function(err, comment){
      if(err)
        res.send(err)

      res.json({message: 'Comentário deletado com sucesso'});
    });
  });

app.use('/', router);

app.listen(port);
console.log('running on port http://localhost:3000');