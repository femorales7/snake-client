
const net = require("net");
const {connect} = require("./client")
console.log("Connecting ...");
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

stdin.on("data", handleUserInput);

const handleUserInput = function () {
  if (key === '\u0003') {
    process.exit();
  }
};

setupInput();
