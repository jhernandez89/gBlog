
function appendComments(data){
  console.log('mydata',data);
  data.forEach((currentComment, i) => {
let comment =
`<a class="pull-left" href="#">
    <img class="media-object img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/kurafire/128.jpg" alt="profile">
</a>
<div class="media-body">
    <div class="well well-lg">
        <h4 class="media-heading text-uppercase reviews">${currentComment.name}</h4>
        <ul class="media-date text-uppercase reviews list-inline">
            <li class="dd">${moment(data.created_at)}</li>

        </ul>
        <p class="media-comment">
            ${currentComment.body}
        </p>
        <div class="responsive optionalVideo${i}">
        </div>
        <a class="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span class="glyphicon glyphicon-share-alt"></span> Reply</a>
    </div>
</div>`

$('.userComment').append(comment);
    if (currentComment.videoLink) {
      var url = currentComment.videoLink.replace("watch?v=", "embed/");
      let videoDiv =
      ` <iframe class="embed-responsive-item" src="${url}" allowfullscreen></iframe>`
      $(`.optionalVideo${i}`).append(videoDiv);
    }

})
}
function getComments() {
  $.ajax({
    url: '/comment',
    method: 'GET',
  })
  .then((response) => {
    appendComments(response);
    console.log('response post: ',response);
  })
  .catch((err) => {
    console.log('response error:', err);
  });
}

$(document).ready(() => {
  getComments();
});
