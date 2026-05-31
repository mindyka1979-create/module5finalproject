const postList = document.querySelector(".post-list");
const input = document.querySelector("#input");

const userId = localStorage.getItem("userId");

input.value = userId;
let inputId;

function setIdNumber(event) {
  inputId = event.target.value;
  fetchUserPosts(inputId);
}

async function fetchUserPosts() {
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${inputId || userId}`
  );
  const postsData = await posts.json();

  console.log(postsData);

  postList.innerHTML = postsData
    .map(
      (post) => `<div class="post">
        <div class="post__title">${post.title}</div>
        <p class="post__body">${post.body}</p>
      </div>`
    )
    .join("");
}

fetchUserPosts();
