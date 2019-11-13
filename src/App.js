import React, { Component } from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { fetchAllCustomers, fetchOneCustomer } from "./store/customers/actions";
import { fetchAllTeetimes, fetchOneTeetime } from "./store/teetimes/actions";
import { connect } from "react-redux";
import TopNav from "./components/layout/TopNav";
import Dashboard from "./components/dashboard/Dashboard";
import NewTeeTimeForm from "./components/dashboard/NewTeeTimeForm";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAllCustomers());
    this.props.dispatch(fetchAllTeetimes());
    this.props.dispatch(fetchOneCustomer());
    this.props.dispatch(fetchOneTeetime());
  }
  render() {
    return (
      <Router>
        <div className="App">
          <TopNav />
          <Container>
            <Row>
              <Col>
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  {/* <Route path="/" component={TeeTimes} /> */}
                  <Route path="/newteetime" component={NewTeeTimeForm} />
                  {/* <Route path="/" component={NewTeeTimeForm} /> */}
                </Switch>
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    customers: state.customers,
    teetimes: state.teetimes
  };
};
export default connect(mapStateToProps)(App);
