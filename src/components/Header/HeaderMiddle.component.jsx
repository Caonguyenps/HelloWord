import React from "react";
import { Grid } from "@material-ui/core";
import Logo from "../../assets/image/Logo.png";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CategorySearchComponent from "../CategorySearch/CategorySearch.component";
import "./header.css";

const HeaderMiddleComponent = (props) => {
  return (
    <Grid className="header-middle">
      <Grid container spacing={0}>
        <Grid item lg={3}>
          <div className="header-logo">
            <img src={Logo} alt="" />
          </div>
        </Grid>
        <Grid item lg={6}>
          <div className="header-search-bar">
            <CategorySearchComponent listsCategory={props.listsCategory} />
          </div>
        </Grid>
        <Grid item lg={3}>
          <div className="header-middle-icon">
            <PersonOutlineIcon className="mr-5" />
            <ShoppingCartIcon className="mr-5" />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeaderMiddleComponent;
