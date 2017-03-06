const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const bodyParser = require('body-parser')
const post = require('./routes/post')
const comment = require('./routes/comment')
const username = require('./routes/username')

app.use(express.static('./public/', { 'index': 'index.html' }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/post', post);
app.use('/comment', comment);
app.use('/username', username);


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
