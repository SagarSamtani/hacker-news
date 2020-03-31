import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../containers/Dashboard";
import NewsList from "../containers/NewsList";

const Routes = () => {
  return (
    <Dashboard>
      <Switch>
        <Route exact path="/hacker-news" component={NewsList} />
      </Switch>
    </Dashboard>
  );
};
export default Routes;
