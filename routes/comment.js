const router = require('express').Router();
const knex = require('../db/knex');


//create
router.post('/', function(req, res){

  knex('comment').insert({
    body: req.body.body,
    created_at: req.body.create_time,
    title: req.body.title,
    videoLink: req.body.videoLink,
  }, 'id').then(function(result){
    res.json(result);
  });
});
//read
  router.get('/', function(req, res){

    knex('comment')
    .join('username', 'username.id', '=', 'comment.user_id')
    .select()
    .then(function(result){
      res.json(result);
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
