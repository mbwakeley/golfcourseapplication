// import React from "react";
// import { connect } from "react-redux";
// import { ListGroup, Container, Col } from "reactstrap";
// import CustomerListItem from "./CustomerListItem";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// const CustomerList = () => {
//   const customers = useSelector(state => state.customers.all);
//   let listOfCustomers = customers.map(customer => (
//     <CustomerListItem key={customer.id} customer={customer} />
//   ));
//   console.log("customerlist", customers);

//   return (
//     <div style={{ display: "flex" }}>
//       <Container>
//         <Col>
//           <Link to="/newcustomer">
//             <button className="btn btn-primary btn-lg mt-3 mb-3">
//               Add New Customer
//             </button>
//           </Link>
//           <hr />
//           <ListGroup>{listOfCustomers}</ListGroup>
//         </Col>
//       </Container>
//     </div>
//   );
// };

// // const mapStateToProps = state => {
// //   return {
// //     customers: state.customers
// //   };
// // };

// export default connect()(CustomerList);
