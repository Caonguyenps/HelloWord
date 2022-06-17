import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreens from "../pages/Home/screens/HomeScreens";
import RegisterScreens from "../pages/Register/screens/RegisterScreens";
import path from "../resources/path";
const ClientRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={path.HOME} render={() => <HomeScreens />} />
        <Route exact path={path.REGISTER} render={() => <RegisterScreens />} />
      </Switch>
    </BrowserRouter>
  );
};

export default ClientRoutes;
