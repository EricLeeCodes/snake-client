const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '172.29.99.4',
    port: 50541
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: ERL");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);
  });


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;