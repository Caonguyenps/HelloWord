import { Grid } from "@material-ui/core";
import React from "react";
import "./header.css";

const HeaderBottomComponent = (props) => {
  const showListsCategory = props?.listsCategory.map((e, index) => {
    return (
      <div className="category-item" key={index}>
        <span>{e.categoryName}</span>
        {e.subCategory.length > 0 ? (
          <i className="fa-solid fa-angle-down ml-2"></i>
        ) : (
          <></>
        )}
        {e.subCategory.length > 0 ? (
          <div className="sub-category">
            {e.subCategory.map((sub, i) => {
              return (
                <div className="sub-category-item">
                  <span>{sub.subCategoryName}</span>
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  });
  return (
    <Grid className="header-bottom">
      <div className="wrap-category">{showListsCategory}</div>
    </Grid>
  );
};

export default HeaderBottomComponent;
