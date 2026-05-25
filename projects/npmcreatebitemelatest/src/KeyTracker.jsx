import React, { Component } from "react";

class KeyTracker extends Component {
  state = {
    key: "",
  };

  handleKey = (e) => {
    this.setState({ key: e.key });
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKey);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKey);
  }

  render() {
    return <h2>Pressed: {this.state.key}</h2>;
  }
}

export default KeyTracker;
