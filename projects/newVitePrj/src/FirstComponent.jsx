import React, { Component } from 'react';

class FirstComponent extends Component {
    state = {
        count: 0
    }
    handleRemove = () => {
        this.setState((prevState) =>({
            count: prevState.count - 1
        }))
    }
    handleIncrement = () => {
        this.setState((prevState) =>({
            count: prevState.count + 1
        }))
    }
    handleReset = () => {
        this.setState({
            count: 0
        })
    }
    render(){
        return(
            <div>
            <button onClick={this.handleIncrement}>+1 to counter</button>
            <button onClick={this.handleRemove}>-1 to counter</button>
            <button onClick={this.handleReset}>set counter to 0</button>
            <p>Count: {this.state.count}</p>
            </div>
        )
    }
}
export default FirstComponent