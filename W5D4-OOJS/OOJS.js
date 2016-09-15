// WARMPUP

function printChildren(parent, ...children){
  console.log(`${parent}'s children are:`);

  children.forEach((child) => {
    console.log(`${child}`);
  });
}

function addThree(a, b, c){
  return a + b + c;
}
var addThreeArray = [1, 2, 3];

console.log(...addThreeArray);

function dinnerTonightIs(food = 'pizza') {
  console.log(`Dinner tonight is ${food}`);
}

// PHASE I

function printCallback(arr) {
  arr.forEach((el) => {
    console.log(el);
  });
}

function titleize(arr, callback) {

  arr = arr.map((name) => {
    return "Mx. " + name + " Clever Last Name";
  });
  callback(arr);
}

titleize(["Mary", "Brian", "Leo"], printCallback);

// PHASE II

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
  return `${this.name} the elephant goes phrRRRRRRRRRR!`;
};

Elephant.prototype.grow = function() {
  this.height += 12;
  return this.height;
};

Elephant.prototype.play = function() {
  return Math.floor(Math.random()*this.tricks.length);
};

Elephant.prototype.addTrick = function (trick) {
  this.tricks.push(trick);
  return this.tricks;
};

// PHASE III

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "protesting the war with subway performance art"]);
let charlie = new Elephant("Charlie", 200, ["reliving the glory days of the USSR", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing disturbingly personal letters to congresspersons", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["feeding crippling gambling addiction", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function (elephant) {
  console.log(`We will not talk about how ${elephant.name} is in the room`);
};

herd.forEach((elephant) => {
  Elephant.paradeHelper(elephant);
});

// PHASE IV

function dinerBreakfast() {
  let order = "All of your bacon and eggs";

}
