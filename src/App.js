import React, { Component } from "react";
// import logo from "./logo.svg";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    // Define Prvate Data
    this.state = {
      monsters: [],
    };
  }

  // called immediately when the component is mounted to the GUI
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  // Output
  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
