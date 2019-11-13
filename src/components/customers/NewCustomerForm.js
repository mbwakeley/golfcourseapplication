// import React from "react";
// import { connect } from "react-redux";
// import { Form, FormGroup, Input, Button, Col, Label, Row } from "reactstrap";
// import { addCustomer } from "../../store/customers/actions";

// class NewCustomerForm extends React.Component {
//   state = {
//     name: "",
//     company: "",
//     phone: "",
//     address: "",
//     email: ""
//   };

//   handleSelect = e => {
//     const { name, value } = e.target;
//     this.setState({ [name]: Number(value) });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.addCustomer({
//       name: this.state.name,
//       company: this.state.company,
//       phone: this.state.phone,
//       address: this.state.address,
//       email: this.state.email
//     });
//     this.setState({
//       name: "",
//       company: "",
//       phone: "",
//       address: "",
//       email: ""
//     });
//   };

//   render() {
//     return (
//       <div style={{ display: "flex" }}>
//         <div class="container">
//           <h2 class="text-center mt-5">Add New Customer</h2>
//           {/* <button
//             class="btn btn-primary"
//             onClick={() => this.props.history.goBack()}
//           >
//             GO BACK
//           </button> */}
//           <div class="col">
//             <hr />
//             <Form onSubmit={this.handleSubmit}>
//               <Row form>
//                 <Col md={4}>
//                   <FormGroup>
//                     <Label for="name">Name</Label>
//                     <Input
//                       type="text"
//                       name="name"
//                       id="name"
//                       value={this.state.name}
//                       onChange={e => this.setState({ name: e.target.value })}
//                     />
//                   </FormGroup>
//                 </Col>
//                 <Col md={4}>
//                   <FormGroup>
//                     <Label for="company">Company</Label>
//                     <Input
//                       type="text"
//                       name="company"
//                       id="company"
//                       value={this.state.company}
//                       onChange={e => this.setState({ company: e.target.value })}
//                     />
//                   </FormGroup>
//                 </Col>
//                 <Col md={4}>
//                   <FormGroup>
//                     <Label for="phone">Phone</Label>
//                     <Input
//                       type="text"
//                       name="phone"
//                       id="phone"
//                       value={this.state.phone}
//                       onChange={e => this.setState({ phone: e.target.value })}
//                     />
//                   </FormGroup>
//                 </Col>
//               </Row>
//               <Row form>
//                 <Col md={4}>
//                   <FormGroup>
//                     <Label for="address">Address</Label>
//                     <Input
//                       type="text"
//                       name="address"
//                       id="address"
//                       value={this.state.address}
//                       onChange={e => this.setState({ address: e.target.value })}
//                     />
//                   </FormGroup>
//                 </Col>
//                 <Col md={4}>
//                   <FormGroup>
//                     <Label for="email">Email</Label>
//                     <Input
//                       type="text"
//                       name="email"
//                       id="email"
//                       value={this.state.email}
//                       onChange={e => this.setState({ email: e.target.value })}
//                     />
//                   </FormGroup>
//                 </Col>
//               </Row>
//               <Button>Add Customer</Button>
//             </Form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default connect()(NewCustomerForm);
