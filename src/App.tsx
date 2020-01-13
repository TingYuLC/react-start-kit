import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, MovieDetail, Theme } from '@/pages';

function App() {
  return (
    <div className="app-wrapper">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movie-detail/:id">
          <MovieDetail />
        </Route>
        <Route path="/theme">
          <Theme />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
