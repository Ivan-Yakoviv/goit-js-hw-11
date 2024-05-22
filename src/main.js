const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", () => {
  fetchUsers()
    .then((users) => renderUsers(users))
    .catch((error) => console.log(error));
});

const searchParams = new URLSearchParams({
  _limit: 5,
  _sort: "name",
});

console.log(searchParams.toString()); // "_limit=5&_sort=name"
const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
console.log(url); // "<https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name>"


function fetchUsers() {
  return fetch(url).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function renderUsers(users) {
  const markup = users
    .map((user) => {
      return `<li>
          <p><b>Name</b>: ${user.name}</p>
          <p><b>Email</b>: ${user.email}</p>
          <p><b>Company</b>: ${user.company.name}</p>
        </li>`;
    })
    .join("");
  userList.insertAdjacentHTML("beforeend", markup);
}