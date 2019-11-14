import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Form, FormGroup, Input, Button, Row, Col, Label } from "reactstrap";
import { addTeetime } from "../../store/teetimes/actions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class NewTeeTimeForm extends React.Component {
  state = {
    time: ""
  };

  handleDate = date => {
    this.setState({ time: date });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTeetime({
      time: this.state.time
    });
  };
  //yyyy-MM-dd'T'HH:mm:ssZ is the format

  render() {
    console.log("state time", this.state.time);
    const customerOptions =
      this.props.customers.length > 0 &&
      this.props.customers.map((customer, i) => {
        return (
          <option
            key={i}
            id="customer_id"
            name="customer_id"
            value={customer.id}
          >
            {customer.name}
          </option>
        );
      });
    return (
      <div style={{ display: "flex" }}>
        <div class="container">
          <h2 class="text-center mt-5">Add Tee Time</h2>
          <div class="col">
            <hr />
            <Form onSubmit={this.handleSubmit}>
              <Col>
                <FormGroup>
                  <DatePicker
                    className="mt-3"
                    selected={this.state.time}
                    onChange={date => this.handleDate(date)}
                    showTimeSelect
                    timeFormat="hh:mm "
                    timeIntervals={15}
                    timeCaption="time"
                    dateFormat="MMMM d, yyyy hh:mm aa"
                  />
                </FormGroup>
                <select class="selectpicker">
                  <option>Mustard</option>
                  <option>Ketchup</option>
                  <option>Barbecue</option>
                </select>

                <Button className="ml-3" color="primary">
                  Add Tee Time
                </Button>
              </Col>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    customers: state.customers.all
  };
};
export default connect(
  mapStateToProps,
  { addTeetime }
)(NewTeeTimeForm);
