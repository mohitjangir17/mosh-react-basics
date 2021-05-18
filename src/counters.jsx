import { React, Component } from "react";
import Counter from "./counter";
import "./App.css";

class Counters extends Component {
  c;
  render() {
    const { onReset, counters, onIncreament, onDecreament, onDelete } =
      this.props;
    return (
      <div className="main-counter">
        <div className="reset-btn">
          <button onClick={onReset}>Reset</button>
        </div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncreament={onIncreament}
            counter={counter}
            onDecreament={onDecreament}
          />
        ))}
      </div>
    );
  }
}
export default Counters;
