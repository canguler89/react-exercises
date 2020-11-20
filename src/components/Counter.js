import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
  }
  increment() {
    this.setState(({count}) => ({ count: count + 1 }));
  }
  reset(){
    this.setState(() => ({count: 0}))
  }
  decrement(){
    this.setState(({count})=> ({count: count - 1}))
  }
  render() {
    return (
      <div>
      <div className="container" style={{display: 'flex'}}>
      <button onClick={this.increment}>
        +
      </button>
      <p>
        Current Count: {this.state.count}
      </p>
      <br />
      <button onClick={this.decrement}>
        -
      </button>
      </div>
       <button onClick={this.reset} style={{display:"block", margin:"auto"}}>
       Reset
     </button>
     </div>
    );
  }
}

export default Counter;
