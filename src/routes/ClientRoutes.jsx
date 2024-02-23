import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import HomeScreens from "../pages/Home/screens/HomeScreens";
import path from "../resources/path";
import NextScreens from "../pages/Home/screens/NextScreens";

const ClientRoutes = () => {
  const [loading, setLoading] = useState(false);
  const handleChangeLoading = (status) => {
    setLoading(status);
  };
  return (
    <>
      <Switch>
        <Route
          exact
          path={path.HOME}
          render={() => (
            <>
              <HomeScreens />
            </>
          )}
        />
        <Route
          exact
          path={path.NEXT}
          render={() => (
            <>
              <NextScreens />
            </>
          )}
        />
      </Switch>
    </>
  );
};

export default ClientRoutes;
