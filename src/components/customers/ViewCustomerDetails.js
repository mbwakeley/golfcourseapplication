import React from "react";
import { Row, Col, Card, CardTitle, CardText, Button } from "reactstrap";
import { connect } from "react-redux";
import { removeCustomer, updateCustomer } from "../../store/customers/actions";

class ViewCustomerDetails extends React.Component {
  handleClick(e, id) {
    console.log("delete", e);
    this.props.removeCustomer(id);
  }

  handleEdit(e, id) {
    console.log("edit", e);
    this.props.updateCustomer(id);
  }

  render() {
    console.log("customers", this.props);

    return (
      <h1>Hello World</h1>
      // <Card body>
      //   <CardTitle>
      //     <h3>{this.props.customer.name}</h3>
      //   </CardTitle>
      //   <Row>
      //     <Col xs="5">
      //       <CardText>
      //         <div>Company: {this.props.customer.company}</div>
      //         <div>Phone: {this.props.customer.phone}</div>
      //       </CardText>
      //     </Col>
      //     <Col>
      //       <CardText>
      //         <div>Email: {this.props.customer.email}</div>
      //         <div>Address: {this.props.customer.address}</div>
      //         <Row>
      //           <Button
      //             className="mr-1"
      //             color="warning"
      //             onClick={e => this.handleEdit(e, this.props.customer.id)}
      //           >
      //             Edit
      //           </Button>
      //           <Button
      //             color="danger"
      //             onClick={e => this.handleClick(e, this.props.customer.id)}
      //           >
      //             Delete
      //           </Button>
      //         </Row>
      //       </CardText>
      //     </Col>
      //   </Row>
      // </Card>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    customer: state.customers.all
    //   locations: state.locations.all.filter(
    //     location => location.id === props.car.location_id
    //   )[0]
    // editCarId: state.cars.editCarId
  };
};

export default connect(
  mapStateToProps,
  { removeCustomer, updateCustomer }
)(ViewCustomerDetails);
