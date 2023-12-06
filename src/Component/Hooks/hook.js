import { Component, useState } from "react";

export default class Add extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      name: "item name : rangu",
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    } else {
      alert("please add rangu");
    }
  };
  addtocart = () => {
    if (this.state.count > 0) {
      alert(this.state.count + " " + this.state.name + " Added to cart");
    } else {
      alert("no items selected to add to cart");
    }
  };
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button type="button" onClick={this.increment}>
          +
        </button>
        {this.state.count}
        <button type="button" onClick={this.decrement}>
          -
        </button>
        <br />
        <button type="submit" onClick={this.addtocart}>
          Add to cart
        </button>
      </div>
    );
  }
}
