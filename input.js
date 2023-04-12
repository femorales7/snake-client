let connection;
const setupInput = function (conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
// const setupInput = (conn) => {
//   connection = conn;
// };


const handleUserInput = function (key) {
  if (key !== '\u0003') {
    switch (key){
      case "w":
        connection.write("Move: up");
      case "a" :
        connection.write("Move: left");
      case "s" :
        connection.write("Move: down");
      case "d" :
        connection.write("Move: right");
    }
    
  }else{
    process.exit();

  
  
}
};

module.exports = {
  setupInput
};