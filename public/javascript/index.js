
function appendPreview (postData) {
  postData.forEach((current, i) => {
    longPostSplit = (current.body).split(' ')
    postSplit = longPostSplit.slice(0, 20)
    splitString = postSplit.join(' ')

    let blogPreview =
    `<div class="post-preview">
        <a href="post.html?id=${current.blog_id}">
            <h2 class="post-title">
                ${splitString}
            </h2>
            <h3 class="post-subtitle">
                ${current.title}
            </h3>
        </a>
        <p class="post-meta">Posted by <a href="#">Start Bootstrap</a> on July 8, 2014</p>
    </div>
    <hr>`
    $('.postPreview').append(blogPreview);

  })
}

function getUsername() {
  $.ajax({
    url: '/username',
    method: 'GET',
  })
  .then((response) => {
    console.log('response: ',response);
  })
  .catch((err) => {
    console.log(err);
  });
}

function getPost() {
  $.ajax({
    url: '/blog_entry',
    method: 'GET',
  })
  .then((response) => {
    appendPreview(response);
    console.log('response: ',response);
  })
  .catch((err) => {
    console.log(err);
  });
}

$(document).ready(() => {
  getUsername();
  getPost();
});
