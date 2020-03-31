import React from "react";
import PropTypes from "prop-types";
import AppHeader from "../AppHeader";
import { withRouter } from "react-router";
import "./dashbaord.scss";

const Dashboard = ({ children, location, history }) => {
  return (
    <div className="dashboard">
      <AppHeader location={location} history={history} />
      <div className="main-content">{children}</div>
    </div>
  );
};

Dashboard.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object
};

export default withRouter(Dashboard);
