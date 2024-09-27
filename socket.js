import { Server } from "socket.io";

// comment
function test() {
  const server = new Server();
  server.on("connection", () => {
    console.log("connected");
  });
}

test();
