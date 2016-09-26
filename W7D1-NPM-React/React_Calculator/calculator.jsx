import React from 'react';

class Calculator extends React.Component{
  letructor(props) {
    super(props);
    this.state = { num1: "", num2: "", result: 0 };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }

  setnum1(e) {
    let num1 = e.target.value ? parseInt(e.target.value) : "";

    this.setState({ num1 });
  }

  setnum2(e) {
    let num2 = e.target.value ? parseInt(e.target.value) : "";

    this.setState({ num2 });
  }

  add(e){
    e.preventDefault();
    let result = this.state.num1 + this.state.num2;
    this.setState({ result });
  }

  subtract(e){
    e.preventDefault();
    let result = this.state.num1 - this.state.num2;
    this.setState({ result });
  }

  multiply(e){
    e.preventDefault();
    let result = this.state.num1 * this.state.num2;
    this.setState({ result });
  }

  divide(e){
    e.preventDefault();
    let result = this.state.num1 / this.state.num2;
    this.setState({ result });
  }

  clear(e){
     e.preventDefault();
     this.setState({ num1: "", num2: "", result: 0 });
   }

  render(){
    return (
      <div>
        <h2>Something is being rendered</h2>
        <h1>{this.state.result}</h1>
          <input onChange={this.setNum1} value={this.state.num1}/>
          <input onChange={this.setNum2} value={this.state.num2}/>
          <button onClick={this.clear}>Clear</button>
          <button onClick={this.add}>+</button>
          <button onClick={this.subtract}>-</button>
          <button onClick={this.multiply}>*</button>
          <button onClick={this.divide}>/</button>
      </div>
    );
  }
}

export default Calculator;
