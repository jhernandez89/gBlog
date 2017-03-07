const router = require('express').Router();
const knex = require('../db/knex');


//create
router.post('/', function(req, res){

  knex('blog_entry').insert({
    body: req.body.body,
    created_at: req.body.create_time,
    title: req.body.title,
  }, 'id').then(function(result){
    res.json(result);
  });
});
//read
  router.get('/', function(req, res){

    knex('blog_entry')
    .join('username', 'username.id', '=', 'blog_entry.user_id')
    .select('*', 'blog_entry.id as blog_id')
    .then(function(result){
      res.json(result);
    });

  });
  router.get('/:id', function(req, res){
    knex('blog_entry')
    .join('username', 'username.id', '=', 'blog_entry.user_id')
    .select()
    .where('blog_entry.id', req.params.id)
    // .first()
    .then(function(result){
      console.log("result: ",result);
      res.json(result);
    })
    .catch(function(result){
      console.log("error results", result)
    });

  });
//update
  router.put('/:id', function(req, res){

  knex('blog_entry').where('id', req.params.id).update({
    stars: req.body.stars
  }).then(function(result){
    res.json(result);
  });

});
//delete
router.delete('/:id', function(req, res){

  knex('blog_entry').where('id', req.params.id).del().then(function(result){
    res.json(result);
  });

});
module.exports = router;
