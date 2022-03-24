import React, { Component } from "react";

export default class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: "",
    };
    this.splitNums = this.splitNums.bind(this);
  }

  splitNums() {
    console.log(this.state.userInput);
    const starterArray = this.state.userInput.split(",");
    console.log(starterArray);
    const evenNums = [];
    const oddNums = [];

    for (let num of starterArray) {
      if (num % 2 === 0) {
        evenNums.push(+num);
      } else {
        oddNums.push(+num);
      }
    }

    this.setState({ evenArray: evenNums, oddArray: oddNums });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={(e) => this.setState({ userInput: e.target.value })}
        />
        <button className="confirmationButton" onClick={this.splitNums}>
          Submit
        </button>
        <span className="resultsBox">
          {JSON.stringify(this.state.evenArray)}
        </span>
        <span className="resultsBox">
          {JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
  }
}
