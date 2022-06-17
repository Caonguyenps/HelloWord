import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreens from "../pages/Home/screens/HomeScreens";
import ProductScreens from "../pages/Product/screens/ProductScreens";
import path from "../resources/path";
const ClientRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={path.HOME} render={() => <HomeScreens />} />
      </Switch>
    </BrowserRouter>
  );
};

export default ClientRoutes;