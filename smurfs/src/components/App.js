import React, { Component } from "react";
import SmurfList from "./SmurfList"
import Smurfform from "./SmurfForm"
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURF VILLAGE</h1>
        <Smurfform />
        <SmurfList />
      </div>
    );
  }
}

export default App;