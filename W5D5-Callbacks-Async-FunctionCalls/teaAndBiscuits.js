const readine = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function teaAndBiscuits (callback) {

  reader.question('Would you like some tea?', function (res1) {
    reader.question('Would you like some biscuits?', function (res2) {
      const firstRes = parseInt(res1);
      const secondRes = parseInt(res2);

      callback(res1, res2);
      });
    });
  }

teaAndBiscuits(function (res1, res2) {
  let firstRes = (res1 === 'yes') ? "would" : "wouldn\'t";
  let secondRes = (res2 === 'yes') ? "would" : "wouldn\'t";
  console.log(`So you ${firstRes} like tea and you ${secondRes} like biscuits.`);
  reader.close();
});
