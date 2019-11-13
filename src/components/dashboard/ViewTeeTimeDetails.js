import React from "react";
import { Row, Col, Card, CardTitle, CardText, Button } from "reactstrap";
import { connect } from "react-redux";
import { removeTeetime, updateTeetime } from "../../store/teetimes/actions";
import Moment from "react-moment";

class ViewTeeTimeDetails extends React.Component {
  handleClick(e, id) {
    console.log("delete", e);
    this.props.removeTeetime(id);
  }

  handleEdit(e, id) {
    console.log("edit", e);
    this.props.updateTeetime(id);
  }

  render() {
    console.log("teetimes", this.props.teetime);
    const customers = this.props.teetime.customers.map(customer => {
      return <h4>{customer.name}</h4>;
    });
    return (
      <Card body>
        <CardTitle>
          <h3>
            {" "}
            <Moment format="MM-DD-YYYY hh:MM A ">
              {this.props.teetime.time}
            </Moment>
          </h3>
        </CardTitle>

        <Col xs="auto">
          <CardText>
            <h4>Customers:</h4>
            <CardText>{customers}</CardText>

            <Button
              className="mr-1"
              color="warning"
              onClick={e => this.handleEdit(e, this.props.teetime.id)}
            >
              Edit
            </Button>
            <Button
              color="danger"
              onClick={e => this.handleClick(e, this.props.teetime.id)}
            >
              Delete
            </Button>
          </CardText>
        </Col>
      </Card>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    editTeeTimeId: state.teetimes.editTeeTimeId
  };
};

export default connect(
  mapStateToProps,
  { removeTeetime, updateTeetime }
)(ViewTeeTimeDetails);
