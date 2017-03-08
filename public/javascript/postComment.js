// commentButton
// uploadURL
// uploadComment
//
//
function getUrlParameter(sParam) {
  const sPageURL = decodeURIComponent(window.location.search.substring(1));
  const sURLVariables = sPageURL.split('&');
  let returner;

  sURLVariables.forEach((paraName) => {
    const sParameterName = paraName.split('=');
    if (sParameterName[0] === sParam) {
      returner = sParameterName[1] === undefined ? false : sParameterName[1];
    }
  });
  return returner;
}

function upload() {
  let username = {};
  let commentData = {};
  let email = $('.emailInput').val()
  console.log('email: ', email);
  let url = $('.uploadURL').val()
  let name = $('.nameInput').val()
  let comment = $('.uploadComment').val()
  let id = getUrlParameter('id');
  console.log(id);
  commentData.videoLink = url;
  commentData.body = comment;
  commentData.currentPost = id;
  console.log(id);
  commentData.name = name;
  commentData.email = email;

  $.ajax({
      url: '/comment',
      method: 'POST',
      data: JSON.stringify(commentData),
      contentType: 'application/json; charset=utf-8',

    })
    .then((response) => {
      console.log(response);
    })
    .catch((response) => {
      console.log('error');
    });

    window.location.reload();
}

$('.commentButton').click(() => {
  event.preventDefault()
  upload()
});
