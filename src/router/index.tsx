import * as React from 'react';
import {Route, Switch, BrowserRouter as Router,} from 'react-router-dom';
import { NotFoundPage } from '../components/notFound';
import Game from '../HOC/game';
import Statistics from '../HOC/statistics';

export const ApplicationRouter: React.FC<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/" exact>
          <Statistics />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );  
}
