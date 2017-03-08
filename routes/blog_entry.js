const router = require('express').Router();
const knex = require('../db/knex');


//  create
router.post('/', (req, res) => {
  knex('blog_entry').insert({
    body: req.body.body,
    created_at: req.body.create_time,
    title: req.body.title,
    user_email: req.body.user_email,
  }, 'id').then((result) => {
    res.json(result);
  });
});
// read
router.get('/', (req, res) => {
  knex('blog_entry')
    .join('username', 'username.id', '=', 'blog_entry.user_id')
    .select('*', 'blog_entry.id as blog_id')
    .then((result) => {
      res.json(result);
    });
});
router.get('/:id', (req, res) => {
  knex('blog_entry')
    .leftJoin('comment', 'comment.currentPost', '=', 'blog_entry.id')
    .join('username', 'comment.user_id', '=', 'username.id')
    .select('*', 'blog_entry.id as blog_id', 'username.name as name', 'blog_entry.title as title', 'blog_entry.body as blog_body', 'comment.body as comment_body', 'comment.created_at as comment_time', 'blog_entry.created_at as blog_time', 'username.id as id')
    .where('blog_entry.id', req.params.id)
    // .first()
    .then((result) => {
      console.log('result: ', result);
      res.json(result);
    })
    .catch((result) => {
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
