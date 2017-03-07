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


function appendPost(postData) {
  console.log(postData);
  const currentPost = getUrlParameter('id')
  const post = postData[0].body;
  const title = postData[0].title;
  const time = postData[0].created_at;
  const name = postData[0].name;

  $('.postTitle').text(title);
  $('.currentPost').text(post);
  $('.postDate').text(moment(time));
  $('.username').text(name);
}


function getPost() {
  $.ajax({
    url: `/blog_entry/${getUrlParameter('id')}`,
    method: 'GET',
  })
  .then((response) => {
    console.log("response",response);
    appendPost(response);
    console.log('response post: ',response);
  })
  .catch((err) => {
    console.log('response error:', err);
  });
}

$(document).ready(() => {
  getPost();
});
