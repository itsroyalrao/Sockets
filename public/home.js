var socket = io();

const params = new URLSearchParams(window.location.search);
const username = params.get("username");
const room = params.get("room");

const form = document.getElementById("form");
const input = document.getElementById("input");
const navbar = document.getElementById("navbar");

navbar.appendChild(document.createTextNode(room));

socket.emit("join room", room);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value, room);
    input.value = "";
  }
});

socket.on("chat message", function (msg) {
  var item = document.createElement("li");
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});
