import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button, Row, Col, ButtonToolbar, FormGroup, FormControl, ControlLabel, HelpBlock, InputGroup, Table } from 'react-bootstrap';

import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis, VictoryArea} from 'victory';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// Put any other imports below so that CSS from your components takes precedence over default styles.
import 'react-bootstrap-typeahead/css/Typeahead.css';

const dummydata = [
         {
            "region": "VIC1",
            "period": "2018-01-18T07:30:00",
            "price": "62.3"
        },   {
            "region": "VIC1",
            "period": "2018-01-18T08:00:00",
            "price": "79.55"
        },   {
            "region": "VIC1",
            "period": "2018-01-18T08:30:00",
            "price": "95.07"
        },   {
            "region": "VIC1",
            "period": "2018-01-18T09:00:00",
            "price": "110.51"
        },   {
            "region": "VIC1",
            "period": "2018-01-18T09:30:00",
            "price": "73.11"
        },   {
            "region": "VIC1",
            "period": "2018-01-18T10:00:00",
            "price": "74.89"
        }];

class PriceChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }


  componentDidMount() {
    fetch('https://p6e56azs2c.execute-api.ap-southeast-2.amazonaws.com/staging/region/VIC1')
    .then(response => {
      return response.json();
    }).then(data => {
      // this.setState({data: dummydata})
       this.setState({data: data["wholesale results"]})
    });
  }


  render() {
    return (
        <VictoryChart
          theme={VictoryTheme.material}
          scale={{x: "time", y: "log"}}
          height={200}
        >
          <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc"}
            }}
            interpolation="natural"
            data= {this.state.data}
            x={(d) => (Date.parse(d.period))}
            y={(d) => (Number(d.price)/10)}
          />
          <VictoryAxis
            fixLabelOverlap={true}

          />
        </VictoryChart>
    );
  }
}

function PriceCalcs(props) {
  return (
    <div>
      <Grid
      fluid={true}
      >
        <Row>
          <Col md={8}>
            Your retailer charged you
          </Col>
          <Col md={4}>
            $100
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            Then they paid
          </Col>
          <Col md={4}>
            $30
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            So you got screwed by
          </Col>
          <Col md={4}>
            $70
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            and you screwed the environment by
          </Col>
          <Col md={4}>
            50 tonnes of CO2
          </Col>
        </Row>
      </Grid>
    </div>
  );
}



export default class RetailerProfitView extends Component {
  render() {
    return (
      <div>
        <Grid>
        <h2>How much did your retailer screw you?</h2>
          <Row>
            <Col md={8}>
              <PriceChart />
            </Col>
            <Col md={4}>
              <PriceCalcs />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
