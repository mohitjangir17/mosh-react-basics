import { React, Component } from "react";

class Counter extends Component {
  // onIncreament = (product) => {
  //   this.setState({ value: this.state.value + 1 });
  // };
  render() {
    return (
      <div className="counter">
        <span style={{ margin: 10 }}>{this.counterData()}</span>

        <button
          style={{ margin: 10 }}
          onClick={() => this.props.onIncreament(this.props.counter)}
        >
          Increament
        </button>
        <button
          style={{ margin: 10 }}
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  counterData() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;
