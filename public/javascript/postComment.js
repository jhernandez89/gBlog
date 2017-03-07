// commentButton
// uploadURL
// uploadComment


function upload(){
  let username = {};
  let commentData = {};
  let url = $('.uploadURL').val()
  let name = $('.nameInput').val()
  let comment = $('.uploadComment').val()
  console.log('URL: ',url)
  console.log('Comment: ',comment);
  console.log('Name: ',name);
  commentData.videoLink = url;
  commentData.body = url;
  username.name = name;


  $.ajax({
  url: '/comment',
  method: 'POST',
  crossDomain: true,
  data: JSON.stringify(commentData),
  contentType: 'application/json; charset=utf-8',

})
.then((response) => {
  console.log('POST RESPONSE:',response);
})
.catch((response) => {
  console.log('error');
});

$.ajax({
url: '/username',
method: 'POST',
crossDomain: true,
data: JSON.stringify(username),
contentType: 'application/json; charset=utf-8',

})
.then((response) => {
console.log('username response', response);
})
.catch((response) => {
console.log('error');
});

}

$('.commentButton').click(() => {
  event.preventDefault()
  upload()
});
