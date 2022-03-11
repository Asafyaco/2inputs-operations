import React from "react";
import "./Content.css";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num1: 0, num2: 0 };
  }

  // --------------------------------------------------------------------------

  // Different functions of opertaions

  // add = () => {
  //   let result = `${Number(this.state.num1) + Number(this.state.num2)}`;
  //   alert("The sum is: " + result);
  // };

  // sub = () => {
  //   let result = `${Number(this.state.num1) - Number(this.state.num2)}`;
  //   alert("The sum is: " + result);
  // };

  // mult = () => {
  //   let result = `${Number(this.state.num1) * Number(this.state.num2)}`;
  //   alert("The sum is: " + result);
  // };

  // divide = () => {
  //   let result = `${Number(this.state.num1) / Number(this.state.num2)}`;
  //   alert("The sum is: " + result);
  // };

  calculation = (operator) => {
    console.log(operator);
    let total;
    switch (operator) {
      case "+":
        total = Number(this.state.num1) + Number(this.state.num2);
        alert("The sum is: " + total);
        break;

      case "-":
        total = Number(this.state.num1) - Number(this.state.num2);
        alert("The sum is: " + total);
        break;

      case "X":
        total = Number(this.state.num1) * Number(this.state.num2);
        alert("The sum is: " + total);
        break;

      case "/":
        total = Number(this.state.num1) / Number(this.state.num2);
        alert("The sum is: " + total);
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <>
        <h2>Our 2 inputs calculator</h2>
        Number 1:{" "}
        <input
          type="number"
          name="num1"
          id="num1"
          onChange={(num1) => {
            this.setState({ num1: num1.target.value });
          }}
        />
        <br />
        <br />
        Number 2:{" "}
        <input
          type="number"
          name="num2"
          id="num2"
          onChange={(num2) => {
            this.setState({ num2: num2.target.value });
          }}
        />
        <br />
        <div className="buttons">
          <button
            className="button"
            value={"+"}
            onClick={(x) => {
              {
                let operator = x.target.value;
                this.calculation(operator);
              }
            }}
          >
            +
          </button>

          <button
            className="button"
            value={"-"}
            onClick={(x) => {
              {
                let operator = x.target.value;
                this.calculation(operator);
              }
            }}
          >
            -
          </button>

          <button
            className="button"
            value={"X"}
            onClick={(x) => {
              {
                let operator = x.target.value;
                this.calculation(operator);
              }
            }}
          >
            X
          </button>

          <button
            className="button"
            value={"/"}
            onClick={(x) => {
              {
                let operator = x.target.value;
                this.calculation(operator);
              }
            }}
          >
            /
          </button>
        </div>
      </>
    );
  }
}
