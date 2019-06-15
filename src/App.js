import React, { Component } from "react";
import PlayersPage from './containers/PlayerPage/PlayersPage';
import Navigation from './components/Navigation/Navigation';
import TeamsPage from './containers/TeamsPage/TeamsPage';

class App extends Component {

  state = {
    selectedPage: 'teams',
    pages: [
      'players', 'teams'
    ]
  }

  setSelectedPage = (page) => {
    let selectedPage = '';
    for(let availablePage of this.state.pages){
      if(page === availablePage){
        selectedPage = page;
      }
    }

    this.setState({ selectedPage: selectedPage})
  }

  render() {
    let page = null;
    switch(this.state.selectedPage){
      case 'players':
        page = <PlayersPage />
        break;
      case 'teams':
        page = <TeamsPage />
        break;
    }
    return(
      <div>
        <Navigation setPage={this.setSelectedPage}/>
        {page}
      </div>
    );
  }
}

export default App;