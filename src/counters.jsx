import { React, Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };

  counterDelete = (counterId) => {
    console.log("event fired", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);

    this.setState({ counters: counters });
  };

  handleIncreament = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.counterDelete}
            onIncreament={this.handleIncreament}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}
export default Counters;
