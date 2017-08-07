

process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');

console.log("let's play tic tac toe! \nenter quit or q to end game");


process.stdin.on('data', function (text) {
  console.log('received data:', util.inspect(text));
  if (text === 'quit\n' || text === 'q\n') {
    done();
    }
});

function done() {
  process.exit();
}

