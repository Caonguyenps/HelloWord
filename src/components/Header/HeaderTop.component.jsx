import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import path from "../../resources/path";
import "./header.css";

const HeaderTopComponent = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push(path.LOGIN);
  };

  return (
    <Grid className="header-top">
      <Grid container spacing={0}>
        <Grid item lg={4}>
          <span className="ml-5 title">Chat with us</span>
          <span className="ml-5">+420 336 775 664</span>
          <span className="ml-5">info@freshnesecom.com</span>
        </Grid>
        <Grid item lg={4}></Grid>
        <Grid item lg={4}>
          <div className="header-top-right">
            <Link>
              <span className="mr-5" onClick={handleClick}>
                Blog
              </span>
            </Link>
            <Link>
              <span className="mr-5">About Us</span>
            </Link>
            <Link>
              <span className="mr-5">Store</span>
            </Link>
          </div>
        </Grid>
      </Grid>
      <hr />
    </Grid>
  );
};

export default HeaderTopComponent;
