import { React, Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["Tag 1", "Tag 2"],
  };

  constructor() {
    super();
    this.onIncreament = this.onIncreament.bind(this);
  }

  onIncreament() {
    // console.log(this.state.count, this);
    this.setState({ count: this.state.count + 1 });
    // console.log(this.setState);
  }
  render() {
    return (
      <div className="counter">
        <h4>{this.counterData()}</h4>

        <button onClick={this.onIncreament}>Increament</button>
        <ol>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ol>
      </div>
    );
  }

  counterData() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;
