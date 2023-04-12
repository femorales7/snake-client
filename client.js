// clien.js
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "172.31.217.78",// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {

    console.log(`Im conected Now`);
    conn.write("Name: FEM");
    //setInterval(() => {conn.write("Move: up")}, 500)
    //conn.write("Move: up");
   
    // code that does something when the connection is first established
  });
  
  conn.on('data', (data) => {
    console.log(`message from the server`, data );
  } )
  
 
  return conn;
};
module.exports = {
  connect
};

