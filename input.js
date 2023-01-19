// const connect = require("./play");
let connection;

const handleUserInput = function (key) {
  console.log("key", key);
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
  if (key === "q") {
    connection.write("Say: beep");
  }


  // switch (key) {
  //   case "w":
  //     connection.write("Move: up");
  //     break;
  //   case "w":
  //     connection.write("Move: up");
  //     break;
  //   case "w":
  //     connection.write("Move: up");
  //     break;
  //   case "w":
  //     connection.write("Move: up");
  //     break;

  //   default:
  //     break;
  // }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

module.exports = setupInput;
