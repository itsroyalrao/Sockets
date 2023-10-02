const username = document.getElementById("username");
const room = document.getElementById("room");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  window.location.href = `home.html?username=${username.value}&room=${room.value}`;
});
