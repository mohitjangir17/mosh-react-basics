import { React, Component } from "react";
import "./App.css";

class Counter extends Component {
  // onIncreament = (product) => {
  //   this.setState({ value: this.state.value + 1 });
  // };
  btnstyle = {
    background: "yellow",
  };
  render() {
    return (
      <div className="counter">
        <div>
          <h3>Item Name</h3>
        </div>
        <div>
          <button>
            <button
              style={{ border: "none" }}
              onClick={() => this.props.onIncreament(this.props.counter)}
            >
              +
            </button>
            <span style={{ margin: 10 }}>{this.counterData()}</span>
            <button
              style={{ border: "none" }}
              onClick={() => this.props.onDecreament(this.props.counter)}
            >
              -
            </button>
          </button>
          <button
            style={{ margin: 10 }}
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  counterData() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;
