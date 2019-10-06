import React, { Component } from "react";
import "./FoodCard.css";

class FoodCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {},
      data: [
        "American",
        "Bagels",
        "Burgers",
        "Chinese",
        "French",
        "Indian",
        "Italian",
        "Korean",
        "Mexican",
        "Pizza",
        "Ramen",
        "Sandwiches",
        "Spanish",
        "Sushi",
        "Thai",
        "Wings"
      ],
      picked: "",
      value: ""
    };
  }

  selectItem = el => {
    var selected = this.state.selected;
    selected[el] = !selected[el];
    this.setState({ selected: selected });
  };
  selectAll = () => {
    let selectAllObject = this.state.data.reduce(
      (a, key) => Object.assign(a, { [key]: true }),
      {}
    );
    this.setState({ selected: selectAllObject });
  };
  selectNone = () => {
    this.setState({ selected: {} });
  };
  renderItem = el => {
    var className = this.state.selected[el] ? "active" : "inactive";
    var onClick = this.selectItem.bind(this, el);
    return (
      <div
        className="foodcard"
        key={el}
        className={`${className} foodcard`}
        onClick={onClick}
      >
        {el}
      </div>
    );
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  handleSubmit = event => {
    this.setState({
      data: [
        ...this.state.data,
        this.state.value.replace(/^\w/, c => c.toUpperCase())
      ].sort()
    });
    event.preventDefault();
    this.setState({ value: "" });
  };

  handleButton = () => {
    let foodOptions = Object.keys(this.state.selected);
    let foodBoolean = Object.values(this.state.selected);
    let checker = foodBoolean.every(v => v === false);

    if (checker === true) {
      this.setState({
        picked: "Nothing, you have to select options!"
      });
      return;
    }
    let random = Math.floor(Math.random() * foodOptions.length);
    while (foodBoolean[random] === false) {
      random = Math.floor(Math.random() * foodOptions.length);
    }
    var toPick = foodOptions[random];
    this.setState({
      picked: toPick
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="select-all-none-container">
          <div onClick={this.selectAll}>Select All</div>
          <div onClick={this.selectNone}>None</div>
        </div>
        <div className="food-cards-container">
          {this.state.data.map(this.renderItem)}
        </div>

        <div className="picked">
          {this.state.picked
            ? "We Picked: " + this.state.picked
            : "What are you going to eat?"}
        </div>

        <button onClick={this.handleButton}>Pick for me!</button>
        <form onSubmit={this.handleSubmit}>
          {" "}
          <input value={this.state.value} onChange={this.handleChange}></input>
          <button className="add-button">+</button>
        </form>
      </React.Fragment>
    );
  }
}

export default FoodCard;
