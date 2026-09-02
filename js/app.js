const form = document.getElementById("searform");
const input = document.querySelector("#searchUser");
const res = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = input.value.trim();

  if (query === "") {
    result.textcontent = "please enter a username";
    return;
  }

  fetch(`https://api.github.com/users/${query}`)
    .then((res) => {
      if (!res.ok) {
        throw new error("user not found");
      } else {
        return res.json();
      }
    })
    .then(
      (data) =>
        (res.innerHTML = `
      <h2>${data.name}</h2>
      <h2>Username : ${data.login}</h2>
      <h3>Followers : ${data.followers}</h3>
      <p>Repositories: ${data.public_repos}</p>
      <p>Bio: ${data.bio}</p>
      `),
    )
    .catch((error) => {
      res.textContent = error.message;
      res.style.color = "red";
    });

  console.log(query);
});
