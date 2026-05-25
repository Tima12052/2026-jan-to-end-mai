import React, { Component } from "react";
class Apps extends Component {
  state = {
    inputValue: "",
  };
  
  handleChange = (evt) => {
    this.setState({ inputValue: evt.target.value });
  };
  
  render() {
    let err;
    const { inputValue } = this.state;
    
    if (inputValue.length >= 8 && inputValue.includes("@")) {
      console.log("working");
    } else {
      switch (true) {
        case inputValue.length < 8 && inputValue.includes("@"):
            err = "the lenght is to small"
          break;
        case !inputValue.includes("@") && inputValue.length >= 8:
          err = "you need an '@' for the email"
          break;
        case !inputValue.includes("@") && inputValue.length < 8:
          err = "your email is too small and must include '@'"
          break;
    
          default:
            err = "i've never seen that before"
          break;
      }
    }
    
    return (
      <div>
        <input type="text" value={inputValue} onChange={this.handleChange} />
        <p>{err}</p>
      </div>
    );
  }
}
export default Apps;
