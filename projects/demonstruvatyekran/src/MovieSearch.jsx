import React, { Component } from "react";
class MovieSearch extends Component {
  state = {
    search: "",
  };
  // input (назва фільму)
  // кнопку "Пошук"
  // 📌 При натисканні:
  componentDidMount() {
    console.log("Compn. was added");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("compn. was updated");
    console.log(prevState);
    console.log(this.state);
  }
  componentWillUnmount() {
    console.log("Compn. was deleted from DOM");
  }

  handleInputChange = (e) => {
    this.setState({ search: e.target.value });
  };

  changeSearch = () => {
    console.log("Name was changed");
    const { search } = this.state;
    fetch(`https://www.omdbapi.com/?apikey=77cdb033&s=${search}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  render() {
    return (
      <div>
        <input 
          value={this.state.search} 
          onChange={this.handleInputChange}
          type="text" 
          placeholder="Film name" 
        />
        <button onClick={this.changeSearch}>Search</button>
      </div>
    );
  }

  // передає введений текст у App
}
export default MovieSearch;
