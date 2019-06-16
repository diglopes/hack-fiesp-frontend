import React from "react";
import { Route, Switch } from "react-router-dom";

import Feed from "./pages/Feed";

export default props => {
  return (
    <Switch>
      <Route path="/" exact component={Feed} />
    </Switch>
  );
};
