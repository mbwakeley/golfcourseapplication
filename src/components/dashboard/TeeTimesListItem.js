import ViewTeeTimeDetails from "./ViewTeeTimeDetails";
import React from "react";
import { connect } from "react-redux";
import EditTeeTimeDetails from "./EditTeeTimeDetails";

const TeeTimesListItem = props => {
  return (
    <div>
      {props.editTeeTimeId === props.teetime.id ? (
        <EditTeeTimeDetails />
      ) : (
        <ViewTeeTimeDetails teetime={props.teetime} />
      )}
    </div>
  );
};

const mapstateToProps = state => {
  return {
    editTeeTimeId: state.teetimes.editTeeTimeId
  };
};
export default connect(mapstateToProps)(TeeTimesListItem);
