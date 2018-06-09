import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import CalculatePage from './pages/Calculate';
import HomePage from './pages/Home';
import TodoPage from './pages/Todo';
import Menu from './components/Menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Menu/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/todo" component={TodoPage}/>
          <Route path="/calculate" component={CalculatePage}/>
          <Route component={HomePage}/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
