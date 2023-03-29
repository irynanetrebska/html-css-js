function displayComments(response) {
  console.log(response);
  console.log(response.data[0].email);
}

let apiUrl = "https://jsonplaceholder.typicode.com/comments";

// AJAX with axios
axios.get(apiUrl).then(displayComments);

// how to console.log all the comments for postId 1?

// AJAX with fetch
/*
let root = 'https://jsonplaceholder.typicode.com'
let path = 'users/1'

fetch(root + '/' + path)
  .then(response => (
    response.json()
  ))
  .then(json => (
    console.log(json)
  ));
  */
