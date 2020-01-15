import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppState } from '@/store';
import { ThemeState } from '@/store/theme/types';
import {
  Home, MovieDetail, Theme, Header,
} from '@/pages';
import { toning, search } from '@/static';

interface AppProps {
  theme: ThemeState;
}

const App = ({ theme }: AppProps) => (
  <div className="app-wrapper">
    <Header
      title="豆瓣App"
      color={theme.color}
      leftImg={toning}
      rightImg={search}
    />
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

export default connect((state: AppState) => ({
  theme: state.theme,
}))(App);
