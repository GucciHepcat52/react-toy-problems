import React, { Component } from "react";

export default class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      palindrome: "",
    };
    this.isPalindrome = this.isPalindrome.bind(this);
  }

  isPalindrome() {
    let string = this.state.userInput;
    let regex = /[\W_]/g;
    let newString = string.toLowerCase().replace(regex, "");
    let reverserString = newString.split("").reverse().join("");

    console.log(newString, reverserString)
    if (reverserString === newString) {
      this.setState({ palindrome: "This is a palindrome" });
    } else {
      this.setState({ palindrome: "This is not a palindrome" });
    }
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          className="inputLine"
          onChange={(e) => this.setState({ userInput: e.target.value })}
        />
        <button className="confirmationButton" onClick={this.isPalindrome}>
          Enter
        </button>
        <span className="resultsBox">
          {JSON.stringify(this.state.palindrome)}
        </span>
      </div>
    );
  }
}
