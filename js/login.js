/////////////// LOGIN FETCH
const usernameField = document.querySelector("#username");
const passwordField = document.querySelector("#password");
//let usernameValue = document.querySelector("#username").value;
//let passwordValue = document.querySelector("#password").value;
let usernameLabel = document.querySelector("#usernameLabel");
let passwordLabel = document.querySelector("#passwordLabel");
const form = document.querySelector("#index-main__login__form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (login_validate(event)) {
    fetch("https://cat-image-t2.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameField.value,
        password: passwordField.value,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("user:", data.username);
        window.location.href = "pages/select_file.html";
      })
      .catch((error) => {
        console.log("Request failed", error);
      });
  } else login_validate(event);
});

function login_validate(event) {
  passwordLabel.innerHTML = "";
  usernameLabel.innerHTML = "";
  event.preventDefault();
  if (
    usernameField.value === "" ||
    usernameField.value.length < 4 ||
    usernameField.value.length > 6
  ) {
    usernameLabel.style.color = "var(--red)";
    passwordLabel.innerHTML = "please enter a username between 4 and 6 chars";
    usernameField.focus();
    usernameField.classList.add("error");
    return false;
  }
  if (passwordField.value === "" || passwordField.value.length < 6) {
    passwordLabel.style.color = "var(--red)";
    passwordLabel.innerHTML = "please enter a password with 6 chars at least";
    passwordField.focus();
    passwordField.classList.add("error");
    return false;
  } else return true;
}
