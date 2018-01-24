import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button, Row, Col, ButtonToolbar, FormGroup, FormControl, ControlLabel, HelpBlock, InputGroup } from 'react-bootstrap';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// Put any other imports below so that CSS from your components takes precedence over default styles.
import 'react-bootstrap-typeahead/css/Typeahead.css';



class LocationOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  render() {
    return (
      <div>
        <h3>Region</h3>
        <FormGroup controlId="location">
        <Typeahead
          clearButton
          defaultSelected={["3000"]}
          labelKey="Postcode"
          placeholder="Enter your postcode..."
          onChange={(selected) => {
            this.setState({selected});
          }}
          selected={this.state.selected}
          options={['2000', '2001', '3000', '3053']}
        />
        </FormGroup>
        <ButtonToolbar>
          <Button onClick={() => {this.setState({selected: ["3000"]});}}>Melbourne</Button>
          <Button onClick={() => {this.setState({selected: ["2000"]});}}>Sydney</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

class UsageOptions extends React.Component {
  constructor(...args) {
    super(...args);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }


  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  onKeyPress(event) {
    if (event.which === 13 /* Enter */) {
      event.preventDefault();
    }
  }

  render() {
    return (
      <div>
        <h3>Usage</h3>
        <form onKeyPress={this.onKeyPress}>
          <FormGroup controlId="monthlyusage">
            <InputGroup>
            <FormControl
              type="number"
              input="numeric"
              value={this.state.value}
              placeholder="Enter monthly usage"
              onChange={this.handleChange}
            />
            <InputGroup.Addon>kWh per month</InputGroup.Addon>
            </InputGroup>
          </FormGroup>
        </form>
          <ButtonToolbar>
          <Button onClick={() => {this.setState({value: ["275"]});}}>1 person</Button>
          <Button onClick={() => {this.setState({value: ["470"]});}}>2 people</Button>
          <Button onClick={() => {this.setState({value: ["610"]});}}>4 people</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

class ProviderOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  render() {
    return (
      <div>
        <h3>Provider</h3>
        <FormGroup controlId="provider">
        <Typeahead
          clearButton
          defaultSelected={["Origin Standing Offer"]}
          labelKey="Provider"
          placeholder="Find your provider and plan"
          onChange={(selected) => {
            this.setState({selected});
          }}
          selected={this.state.selected}
          options={['Origin Standing Offer', 'AGL Standing Offer', 'Energy Australia Standing Offer']}
        />
        </FormGroup>
        <ButtonToolbar>
          <Button onClick={() => {this.setState({selected: ["Origin Standing Offer"]});}}>Origin</Button>
          <Button onClick={() => {this.setState({selected: ["AGL Standing Offer"]});}}>AGL</Button>
        </ButtonToolbar>
      </div>
    );
  }
}


export default class UserSelectionView extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col md={4}>
              <LocationOptions />
            </Col>
            <Col md={4}>
              <UsageOptions />
            </Col>
            <Col md={4}>
              <ProviderOptions />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
