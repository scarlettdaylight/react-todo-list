import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import CalculatePage from './pages/Calculate';
import TodoPage from './pages/Todo';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Menu/>
        <Container className="content-wrapper">
          <Row>
            <Col xs={12}>
              <Switch>
                <Route path="/todo" component={TodoPage}/>
                <Route path="/calculate" component={CalculatePage}/>
                <Route component={TodoPage}/>
              </Switch>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default App;
