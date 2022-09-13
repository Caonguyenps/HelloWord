import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import RegisterScreens from "../pages/Account/screens/RegisterScreens";
import path from "../resources/path";
import LoadingComponent from "../components/Loading/Loading.component";
import LoginScreens from "../pages/Account/screens/LoginScreen";
import UpdateForgotPasswordScreens from "../pages/Account/screens/UpdateForgotPasswordScreens";
import OtpScreens from "../pages/Account/screens/OtpScreens";
import ForgotPasswordScreens from "../pages/Account/screens/ForgotPasswordScreens";

const AccountRoutes = () => {
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
          path={path.REGISTER}
          render={() => (
            <RegisterScreens handleChangeLoading={handleChangeLoading} />
          )}
        />
        <Route
          exact
          path={path.LOGIN}
          render={() => (
            <LoginScreens handleChangeLoading={handleChangeLoading} />
          )}
        />

        <Route
          exact
          path={path.UPDATE_FORGOT_PASSWORD}
          render={(props) => (
            <UpdateForgotPasswordScreens
              handleChangeLoading={handleChangeLoading}
              {...props}
            />
          )}
        />

        <Route
          exact
          path={path.OTP}
          render={(props) => (
            <OtpScreens handleChangeLoading={handleChangeLoading} {...props} />
          )}
        />

        <Route
          exact
          path={path.FORGOT_PASSWORD}
          render={() => (
            <ForgotPasswordScreens handleChangeLoading={handleChangeLoading} />
          )}
        />
      </Switch>
    </>
  );
};

export default AccountRoutes;
