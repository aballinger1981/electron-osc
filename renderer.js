// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const OSC = require('osc-js');

var osc = new OSC();
osc.open(); // connect by default to ws://localhost:8080

document.getElementById('send').addEventListener('click', function() {
  let value = document.querySelector('#message').value;
  var message = new OSC.Message('/test', value);
  osc.send(message);
  document.getElementById('message').value = '';
});

osc.on('/response', (message) => {
  console.log(message.args);
});