import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import Portal from './containers/Portal';

class App extends Component {

  state = {
  }

  render() {
    return(
      <BrowserRouter>
        <Portal />
      </BrowserRouter>
    );
  }
}

export default App;