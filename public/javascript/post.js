const picture = ['beemo.jpg', 'bubblegum.png', 'fin.jpg', 'flame.png', 'jakeTheDog.jpg',
                  'lemongrab.jpg', 'lumpy.jpg', 'lumpy.jpg', 'marceline.jpg',
                  'rain.gif', 'treeTrunks.png']

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

function appendComments(data){
  // console.log('mydata',data);
  data.forEach((currentComment, i) => {
    console.log(currentComment);
    let randomNumber = Math.floor((Math.random() * 10));
    let randomCharacter = picture[randomNumber]
    if(currentComment.body) {
let comment =
`<a class="pull-left">
    <img class="media-object img-circle" style="width:120px;height:auto;" src="../pictures/${randomCharacter}" alt="profile">
</a>
<div class="media-body">
    <div class="well well-lg">
        <h4 class="media-heading text-uppercase reviews">${currentComment.name}</h4>
        <ul class="media-date text-uppercase reviews list-inline">
            <li class="dd">${moment(currentComment.created_at)}</li>

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
}
})
}


function appendPost(postData) {
  // console.log("post data: ",postData);
  const currentPost = getUrlParameter('id')
  const post = postData[0].blog_body;
  const title = postData[0].title;
  const time = postData[0].created_at;
  const name = postData[0].name;
console.log('name: ',name);
  $('.postTitle').text(title);
  $('.currentPost').text(post);
  $('.postDate').text(moment(time));
  $('.username').text(name);
  appendComments(postData)
}


function getPost() {
  console.log('hello2');
  $.ajax({
    url: `/blog_entry/${getUrlParameter('id')}`,
    method: 'GET',
  })
  .then((response) => {
    console.log("responseLSJDFLJS",response);
    appendPost(response);
    // console.log('response postSDFNSLF: ',response);
  })
  .catch((err) => {
    // console.log('response error:', err);
  });
}

$(document).ready(() => {
  console.log('hello');
  getPost();
});
