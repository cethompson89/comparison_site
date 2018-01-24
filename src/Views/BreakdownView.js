import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button, Row, Col, ButtonToolbar, FormGroup, FormControl, ControlLabel, HelpBlock, InputGroup, Table } from 'react-bootstrap';

import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis, VictoryArea} from 'victory';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// Put any other imports below so that CSS from your components takes precedence over default styles.
import 'react-bootstrap-typeahead/css/Typeahead.css';


function DailyBreakdown(props) {
  return (
    <div>
    <h4>Daily Charges</h4>
    <Table responsive>
      <tbody>
        <tr>
          <td>You Pay</td>
          <td>$360</td>
        </tr>
        <tr>
          <td>Power Lines</td>
          <td>$80</td>
        </tr>
        <tr>
          <td>Meter Cost</td>
          <td>$80</td>
        </tr>
        <tr>
          <td>Retailer gets</td>
          <td>$160</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}


class BreakdownChart extends React.Component {
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
      <div>
        <h4>Usage charges</h4>
        <VictoryChart
          theme={VictoryTheme.material}
          scale={{x: "time", y: "log"}}
          height={200}
        >
          <VictoryArea
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
      </div>
    );
  }
}

function TotalBreakdown(props) {
  return (
    <div>
    <h4>Total Charges</h4>
    <Table responsive>
      <tbody>
        <tr>
          <td>You Pay</td>
          <td>$1400</td>
        </tr>
        <tr>
          <td>Power Lines</td>
          <td>$320</td>
        </tr>
        <tr>
          <td>Meter Cost</td>
          <td>$80</td>
        </tr>
        <tr>
          <td>Wholesale costs</td>
          <td>$400</td>
        </tr>
        <tr>
          <td>Environmental costs</td>
          <td>$100</td>
        </tr>
        <tr>
          <td>Retailer gets</td>
          <td>$500</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}



export default class BreakdownView extends Component {
  render() {
    return (
      <div>
        <Grid>
        <h2>Breakdown</h2>
          <Row>
            <Col md={3}>
              <DailyBreakdown />
            </Col>
            <Col md={6}>
              <BreakdownChart />
            </Col>
            <Col md={3}>
              <TotalBreakdown />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
