//Make connection
let socket = io.connect("http://localhost:4000");

//query dom
let message = document.getElementById("message");
let handle = document.getElementById("handle");
let btn = document.getElementById("send");
let output = document.getElementById("output");

//emit events
btn.addEventListener("click", () => {
  console.log("hello");
  socket.emit("chat message", {
    message: message.value,
    handle: handle.value,
  });
});

//Listen for events
socket.on("chat message", (data) => {
  output.innerHTML += `<p>${data.handle}: ${data.message}</p>`
});
