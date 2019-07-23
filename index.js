let express = require("express");
let socket = require("socket.io");

//App setup
let app = express();
let server = app.listen(4000, () => {
  console.log("Listening to requests on port 4000");
});

//static files
app.use(express.static("public"));

//socket setup
let io = socket(server);

io.on("connection", (socket) => {

  socket.on("chat message", (data) => {
    io.sockets.emit("chat message", data)
  });
});

console.log("test");
