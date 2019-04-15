import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import Characters from "./Characters.json";
import "./App.css";

 function shuffleCharacters(array) {

  for (let i = array.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;

}//sets state to 0 or empty
class App extends Component {
  state = {
    Characters,
    clickedCharacters: [],
    score: 0
  };

 

handleClick = id => {
  if (this.state.clicked.indexOf(id) === -1) {
    this.handleIncrement();
    this.setState({ clicked: this.state.clicked.concat(id) });
  } else {
    this.handleReset();
  }
};

handleIncrement = () => {
  const newScore = this.state.score +1;
  this.setState({
    score: newScore,
  });
  if (newScore >= this.state.highscore) {
    this.setState({ highscore: newScore });
  }
  else if (newScore === 12) {
    alert ("Well done, my young apprentice!");
  }

  this.handleShuffle();
};
  
handleReset = () => {
  this.setState({
    score: 0,
    highscore: this.state.highscore,
    clicked: []
  });
  this.handleShuffle();
};

handleShuffle = () => {
  let shuffledCards = shuffleCharacters(Characters);
  this.setState({ cards: shuffledCards });
};


//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div>
          {this.state.Characters.map(Characters => (
            <FriendCard
              imageClick={this.imageClick}
              id={Characters.id}
              key={Characters.id}
              image={Characters.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  };
};
export default App;