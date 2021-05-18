import React, { Component } from "react";
import "./App.css";
import Navbar from "./navbar";
import Counters from "./counters";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };

  counterDelete = (counterId) => {
    // console.log("event fired", counterId);
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
  handleDecreament = (counter) => {
    if (counter.value === 0) {
      alert("Already Minimum");
      return;
    } else {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value--;
      this.setState({ counters });
    }
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <div className="App">
        <Navbar totalCounters={this.state.counters.length} />
        {this.state.counters.length > 0 ? (
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncreament={this.handleIncreament}
            onDecreament={this.handleDecreament}
            onDelete={this.counterDelete}
          />
        ) : (
          <h1>Nothing to show</h1>
        )}
      </div>
    );
  }
}

export default App;
