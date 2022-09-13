import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import HeaderTopComponent from "./HeaderTop.component";
import { useEffect } from "react";
import "./header.css";
import HeaderMiddleComponent from "./HeaderMiddle.component";
import HeaderBottomComponent from "./HeaderBottom.component";
import { getCategoryProduct } from "../../api/product.api";

const HeaderComponent = () => {
  const [listsCategory, setListsCategory] = useState([]);
  useEffect(async () => {
    await getCategoryProduct().then((res) => {
      setListsCategory(res.data);
    });
  }, []);

  return (
    <Grid id="header">
      <HeaderTopComponent />
      <HeaderMiddleComponent listsCategory={listsCategory} />
      <HeaderBottomComponent listsCategory={listsCategory} />
    </Grid>
  );
};

export default HeaderComponent;
