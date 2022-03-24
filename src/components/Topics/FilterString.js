import React, { Component } from "react";

export default class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: ["Hello my name is Dallin", "name Hola", "Aloha"],
      userInput: "",
      filteredArray: [],
    };
    this.filterArray = this.filterArray.bind(this);
  }

  filterArray() {
    const foundStrings = this.state.unFilteredArray.filter((string) =>
      string.includes(this.state.userInput)
    );
    this.setState({ filteredArray: foundStrings });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
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
        <span className="resultsBox filterStringRB">
          {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}
