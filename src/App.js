import React from 'react';
import './App.css';


class App extends React.Component {

  constructor(){
    super()
    this.state = {
      players: [
        {
          name: "brian",

          id: 1
        },
        {
          name: "john",

          id: 2
        },
        {
          name: "mike",

          id: 3
        }

      ]
    }
  }
  removePlayer = (id) => {
    this.setState( prevState =>{
      return {
        players: prevState.players.filter(ply => ply.id != id)
      };
    });
  }

  render(){
    return (
      <div className ="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length}/>
        {this.state.players.map( player =>
      <Player
        name= {player.name}
        id={player.id}
        key={player.id.toString()}
        removePlayer={this.removePlayer}
        />
      )}
      </div>
    );

  }

}

const Header = (props) => {
  return (
    <header>
    <h1>{props.title}</h1>
    <span className="stats">Player: {props.totalPlayers}</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>*</button>
        {props.name}
      </span>
      <Counter />
    </div>
  );
}

class Counter extends React.Component{

constructor(){
  super()
  this.state = {
    score: 0
  }
}

addScore = () => {
this.setState( prevState => ({
  score: prevState.score +1
}));
}

lessScore = () => {
this.setState( prevState => ({
  score: prevState.score -1
}));
}


  render(){
  return(
    <div className="counter">
      <button className="counter-action decrement" onClick={() => this.lessScore()}> - </button>
      <span className="counter-score">{this.state.score}</span>
      <button className="counter-action increment" onClick={() => this.addScore()}> + </button>
    </div>
  );
 }
}

export default App;
