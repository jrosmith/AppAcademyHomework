function Cat () {
    this.name = 'Markov';
    this.age = 3;
  }

  function Dog () {
    this.name = 'Noodles';
    this.age = 4;
  }

  Dog.prototype.chase = function (cat) {
    // ESLint pointed out that you all missed a semicolon the
    // second I copied and pasted. Shame.
    console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`);
  };

  const Markov = new Cat ();
  const Noodles = new Dog ();

Noodles.chase(Markov);

Noodles.chase.call(Markov, Noodles);
Noodles.chase.apply(Noodles, Markov);
