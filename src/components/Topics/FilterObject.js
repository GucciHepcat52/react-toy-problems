import React, { Component } from "react";

export default class FilterObjects extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        {
          name: "Dallin",
          age: 25,
        },
        {
          name: "Maddy",
          age: 23,
        },
      ],
      userInput: "",
      filteredArray: [],
    };
    this.filterArray = this.filterArray.bind(this);
  }

  filterArray() {
    const filteredName = this.state.unFilteredArray.filter(
      (person) => person.name === this.state.userInput
    );
    console.log(filteredName);
    if (filteredName.length === 1) {
      this.setState({ filteredArray: filteredName });
    } else {
      this.setState({ filteredArray: "Person Not Here" });
    }
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          className="inputLine"
          onChange={(e) => this.setState({ userInput: e.target.value })}
        />
        <button className="confirmationButton" onClick={this.filterArray}>
          Filter
        </button>
        <span className="resultsBox filterOjbectRB">
          {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}
