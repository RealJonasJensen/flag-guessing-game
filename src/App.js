import React, { Component } from 'react';
import './App.css';

import Game from "./components/Game";
import Navbar from "./components/Navbar";

// Requires

const shuffle = require('shuffle-array')

class App extends Component {

  state = {
    countries: [],
    selectedCountry: {},
    countryOptions: [],
    guesses: 0,
    wrongGuesses: 0,
    rightGuesses: 0,
  }

  componentDidMount() {
    const url = "https://restcountries.eu/rest/v2/all";
    fetch(url)
      .then(data => data.json())
      .then(data => this.setState({ countries: data }))

  }

  selectHandle = () => {
    const countries = [...this.state.countries]
    const countryOptions = [];
    const ranNum = Math.floor(Math.random() * countries.length)
    for (let index = 0; index <= 2; index++) {
      let ranNum = Math.floor(Math.random() * countries.length)
      countryOptions.push(countries[ranNum])
    }
    countryOptions.push(countries[ranNum])
    shuffle(countryOptions);
    this.setState({ selectedCountry: countries[ranNum], countryOptions })

    // console.log(countryOptions)
    // console.log(countries)
    // console.log(ranNum)
  }

  checkChoice = (e) => {
    let guess = e.target.value;
    let answer = this.state.selectedCountry.name;
    let rightGuesses = this.state.rightGuesses;
    let wrongGuesses = this.state.wrongGuesses;
    let guesses = this.state.guesses;
    if (guess === answer) {
      rightGuesses++;
      this.selectHandle();
    } else {
      wrongGuesses++;
      this.selectHandle();
    }
    guesses++;
    this.setState({ rightGuesses, wrongGuesses, guesses })
  }


  render() {
    return (
      <div className="App">
        <Navbar />
        <Game newGame={this.selectHandle}
          options={this.state.countryOptions}
          selected={this.state.selectedCountry}
          checkGame={this.checkChoice}
          right={this.state.rightGuesses}
          wrong={this.state.wrongGuesses}
          guesses={this.state.guesses} />
      </div>
    );
  }
}

export default App;
