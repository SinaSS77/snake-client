const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    conn.write("Name: SIN");
    conn.write("Say: Beep");
    // setTimeout(() => conn.write("Move: up"), 5000);
    // conn.write("Move: down"); // - move down one square (unless facing up)
    // conn.write("Move: left"); // - move left one square (unless facing right)
    // conn.write("Move: right"); // - move left one square (unless facing left)
  });

  // conn.on("data", (data) => {
  //   console.log("Server says: ", data);
  // });

  return conn;
};

module.exports = connect;
