const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const logger = require('morgan')
const bodyParser = require('body-parser')
const blogEntry = require('./routes/blog_entry')
const comment = require('./routes/comment')
const username = require('./routes/username')

app.use(logger('dev'))
app.use(express.static('./public/', { 'index': 'index.html' }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/blog_entry', blogEntry);
app.use('/comment', comment);
app.use('/username', username);


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
