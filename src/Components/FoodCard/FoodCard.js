import React, { Component } from "react";
import "./FoodCard.css";

class FoodCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {},
      data: [
        "Burgers",
        "Chinese",
        "French",
        "Indian",
        "Italian",
        "Korean",
        "Mexican",
        "Pizza",
        "Ramen",
        "Spanish",
        "Sushi",
        "Thai"
      ],
      picked: ""
    };
    this.selectItem = this.selectItem.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }
  handleClick(i, event) {
    alert(i);
    this.setState({ selected: true });
  }
  selectItem(el) {
    var selected = this.state.selected;
    selected[el] = !selected[el];
    this.setState({ selected: selected });
  }
  renderItem(el) {
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
  }
  handleButton = () => {
    let foodOptions = Object.keys(this.state.selected);
    this.setState({
      picked: foodOptions[Math.floor(Math.random() * foodOptions.length)]
    });
  };

  render() {
    let foodList = [
      "Burgers",
      "Chinese",
      "French",
      "Indian",
      "Italian",
      "Korean",
      "Mexican",
      "Pizza",
      "Ramen",
      "Spanish",
      "Sushi",
      "Thai"
    ];
    return (
      <React.Fragment>
        <ul></ul>
        <div className="food-cards-container">
          {this.state.data.map(this.renderItem)}
        </div>
        <button onClick={this.handleButton}>Pick for me!</button>
        <div>{this.state.picked}</div>
      </React.Fragment>
    );
  }
}

export default FoodCard;
