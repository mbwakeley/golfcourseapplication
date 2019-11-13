import React from "react";
// import CustomerList from "./CustomerList";
import TeeTimesList from "./TeeTimesList";

const Dashboard = props => {
  let viewteetimes = Number(props.match.params.id) || 0;
  return (
    <div>
      <div className="container">
        <h2 className="text-center mt-5">Tee Times</h2>
        <hr />
        <div class="container">
          <div>
            <TeeTimesList viewteetimes={viewteetimes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
