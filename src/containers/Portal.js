import React, { Component } from "react";
import { Route } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import Main from '../components/Main';
import PlayersPage from './PlayerPage/PlayersPage';
import PlayerPage from './PlayerPage/PlayerPage';
import TeamsPage from './TeamsPage/TeamsPage';
 import TeamPage from './TeamsPage/TeamPage';

class Portal extends Component {
    state = {
    }
  
    render() {
      return(
        <div>
            <Navigation />
            <Route path="/" exact component={Main}/>
            <Route path="/players" exact component={PlayersPage} />
            <Route path="/players/:id" exact component={PlayerPage}/>
            <Route path="/teams" exact component={TeamsPage} />
            <Route path="/teams/:id" exact component={TeamPage} />
        </div>
      );
    }
  }

  export default Portal;