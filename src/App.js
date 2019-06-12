import React, { Component } from "react";
import PlayerPage from './containers/PlayerPage/PlayerPage';
import Navigation from './components/Navigation/Navigation';

class App extends Component {

  render() {
    return(
      <div>
      <Navigation />
      <PlayerPage />
      </div>
    );
  }
}

export default App;