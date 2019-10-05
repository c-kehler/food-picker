import React, { Component } from "react";
import "./FoodCard.css";
class FoodCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }
  handleClick(i, event) {
    alert(i);
  }

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
        <div className="food-cards-container">
          {foodList.map((item, i) => (
            <div
              key={i}
              onClick={this.handleClick.bind(this, i)}
              className="foodcard"
            >
              {item}
            </div>
          ))}
        </div>
        <button>Pick for me!</button>
      </React.Fragment>
    );
  }
}

export default FoodCard;
