const router = require('express').Router();
const knex = require('../db/knex');


//create
router.post('/', function(req, res){
console.log('commentReq: ',req.body);
  knex('username').insert({
    name: req.body.name,
    email: req.body.email,
  }, 'id').then(function(result){
    knex('comment').insert({
      user_id: knex('username').where('name', req.body.name).select('id'),
      body: req.body.body,
      videoLink: req.body.videoLink,
      currentPost: +req.body.currentPost,
    }, 'id').then(function(result){
      res.json(result);
    });
  });


});
//read
  router.get('/', function(req, res){

    knex('comment')
    .leftJoin('username', 'username.id', '=', 'comment.user_id')
    .join('blog_entry', 'comment.user_id', '=', 'blog_entry.id')
    .select('comment.videoLink', 'comment.body as body', 'comment.currentPost', 'username.name',
      'comment.created_at')
    .select('*')
    .then(function(result){
      res.json(result);
      console.log(result);
    });

  });
  router.get('/:id', function(req, res){

    knex('comment').where('id', req.params.id).first().then(function(result){
      res.json(result);
    });

  });
//update
  router.put('/:id', function(req, res){

  knex('comment').where('id', req.params.id).update({
    stars: req.body.stars
  }).then(function(result){
    res.json(result);
  });

});
//delete
router.delete('/:id', function(req, res){

  knex('comment').where('id', req.params.id).del().then(function(result){
    res.json(result);
  });

});
module.exports = router;
