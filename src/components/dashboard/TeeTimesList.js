import React from "react";
import { connect } from "react-redux";
import { ListGroup } from "reactstrap";
import TeeTimesListItem from "./TeeTimesListItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TeeTimesList = () => {
  const teetimes = useSelector(state => state.teetimes.all);
  let listOfTeeTimes = teetimes.map(teetime => (
    <TeeTimesListItem key={teetime.id} teetime={teetime} />
  ));

  return (
    <div style={{ display: "flex" }}>
      <div className="container">
        <div className="col">
          <Link to="/newteetime">
            <button className="btn btn-primary btn-lg mt-3 mb-3">
              Add New Tee Time
            </button>
          </Link>
          <hr />
          <ListGroup>{listOfTeeTimes}</ListGroup>
        </div>
      </div>
    </div>
  );
};

export default connect()(TeeTimesList);
