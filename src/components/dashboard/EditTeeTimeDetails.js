import React from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Input, Button, Col, Label, Row } from "reactstrap";
import { updateTeetime } from "../../store/teetimes/actions";

class EditTeeTimeDetails extends React.Component {
  state = {
    time: ""
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <div class="container">
          <h2 class="text-center mt-5">Edit Tee Time</h2>
          <FormGroup>
            <Label for="sold_date">Date</Label>
            <Input type="date" name="sold_date" id="sold_date" />
          </FormGroup>
          <Button className="mb-3">Save</Button>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     locations: state.locations.all,
//     cars: state.cars.all,
//     editCarId: state.cars.editCarId
//   };
// };
export default connect()(EditTeeTimeDetails);
//   mapStateToProps,
//   { editCar }
