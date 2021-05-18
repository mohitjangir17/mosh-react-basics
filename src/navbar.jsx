import { Component } from "react";
import "./App.css";

class Navbar extends Component {
  render() {
    const { totalCounters } = this.props;
    return (
      <nav className="navBar">
        <span className="headingspan">Shopping Cart</span>
        <span className="counterbadge">{totalCounters}</span>
      </nav>
    );
  }
}
export default Navbar;
