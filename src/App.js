import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button, Row, Col, ButtonToolbar, FormGroup, FormControl, ControlLabel, HelpBlock, InputGroup } from 'react-bootstrap';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// Put any other imports below so that CSS from your components takes precedence over default styles.
import 'react-bootstrap-typeahead/css/Typeahead.css';

import api from './api';
import UserSelectionsView from './Views/UserSelectionsView';
import RetailerProfitView from './Views/RetailerProfitView';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">React App</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>How much are you getting screwed?</h1>
          </Grid>
        </Jumbotron>
        <div>
          <UserSelectionsView />
        </div>
        <div>
         <RetailerProfitView />
        </div>
      </div>
    );
  }
}

export default App;
