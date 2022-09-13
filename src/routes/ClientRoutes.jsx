import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import HomeScreens from "../pages/Home/screens/HomeScreens";
import path from "../resources/path";
import LoadingComponent from "../components/Loading/Loading.component";
import FooterComponent from "../components/Footer/Footer.component";
import HeaderComponent from "../components/Header/Header.component";

const ClientRoutes = () => {
  const [loading, setLoading] = useState(false);
  const handleChangeLoading = (status) => {
    setLoading(status);
  };
  return (
    <>
      {loading ? <LoadingComponent /> : ""}
      <Switch>
        <Route
          exact
          path={path.HOME}
          render={() => (
            <>
              <HeaderComponent />
              <HomeScreens />
              {/* <FooterComponent /> */}
            </>
          )}
        />
      </Switch>
    </>
  );
};

export default ClientRoutes;
