// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

const userList = document.querySelector(".user-list");

console.log(userList);

async function main() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await users.json();
  console.log(usersData);

  userList.innerHTML = usersData
    .map(
      (user) => `<div class="user" onclick="navigateToUserPage(${user.id})">
          <div class="user-card">
            <div class="user-card__container">
              <h3>${user.name}</h4>
                <p><b>Email:</b> ${user.email}</p>
                <p><b>Phone:</b> ${user.phone}</p>
                <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
            </div>
          </div>
        </div>`
    )
    .join("");
}

main();

function navigateToUserPage(userId) {
  localStorage.setItem("userId", userId);

  window.location.href = `${window.location.origin}/user.html`;
}