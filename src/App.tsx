import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, MovieDetail } from '@/pages';

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
      </Switch>
    </div>
  );
}

export default App;
