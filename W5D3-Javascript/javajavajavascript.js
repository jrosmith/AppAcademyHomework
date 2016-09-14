function madLib(verb, adjective, noun){
  return `We shall ${verb} the ${adjective} ${noun}`;
}

console.log(madLib('fly', 'iridescent', 'zoo'));
console.log(madLib('eat', 'rolling', 'cactus'));


function isOdd(num){
  let bool = true;
  if (num % 2 === 0) {
    bool = false;
  }
  return bool;
}

console.log(isOdd(2) === false);
console.log(isOdd(5) === true);
console.log(isOdd(-17) === true);

function yell(str){
  return str.toUpperCase();
}

console.log(yell('i am yelling') === 'I AM YELLING');

function isSubstring(searchString, substring){
  return(searchString.indexOf(substring) !== -1);
}

console.log(isSubstring("The cat went to the store", "he cat went") === true);
console.log(isSubstring("time to program", "time") === true);
console.log(isSubstring("Jump for joy", "joys") === false);

function xOR(val1, val2){
  return (val1 || val2) && !(val1 && val2);
}

function fizzBuzz(array){
  var fizzBuzzedArray = [];
  for (var i = 0; i < array.length; i++) {
    if(xOR(i % 3 === 0, i % 5 === 0)){
      fizzBuzzedArray.push(array[i]);
    }
  }
  return fizzBuzzedArray;
}

function isPrime(num){
  if( num <= 3) {
    return true;
  } else {

    let i = 0;

    while (i < Math.sqrt(num)) {
      if(num % i === 0){
        i ++;
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
}

console.log(isPrime(2) === true);
console.log(isPrime(10) === false);
console.log(isPrime(15485863) === true);
console.log(isPrime(3548563) === false);

function printChildren(parent, ...children){
  console.log(`${parent}'s children are:`);
  children.forEach((child) => {
    console.log(child);
  });
}

printChildren("George", "Cassie", "Jeff", "Roger");
console.log("Roger died of cholera");
printChildren("George", "Cassie", "Jeff");

function addThree (a, b, c) {
  return a + b + c;
}
var arr = [1,2,3];

console.log(addThree(...arr));

function dinnerTonightIs(food = 'pizza'){
  console.log(`Dinner tonight is ${food}`);
}

dinnerTonightIs('some inferior food');
dinnerTonightIs();
