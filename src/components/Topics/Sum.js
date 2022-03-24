import React, { Component } from "react";

export default class Sum extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      sum: null,
    };
    this.theSum = this.theSum.bind(this);
  }

  theSum() {
    let num1 = +this.state.number1;
    let num2 = +this.state.number2;
    let sum = num1 + num2;
    this.setState({ sum: sum });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          className="inputLine"
          onChange={(e) => this.setState({ number1: e.target.value })}
        />
        <input
          className="inputLine"
          onChange={(e) => this.setState({ number2: e.target.value })}
        />
        <button className="confirmationButton" onClick={this.theSum}>
          Enter
        </button>
        <span className="resultsBox">{JSON.stringify(this.state.sum)}</span>
      </div>
    );
  }
}
