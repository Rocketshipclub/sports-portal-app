import React, { Component } from "react";
import PlayerPage from './containers/PlayerPage/PlayerPage';

class App extends Component {

  render() {
    //this.getAllPlayersFromDatabase();
    return(
      <PlayerPage />
    );
  }
}

export default App;