//thanh search của headerMiddle
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "./search.css";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    borderRadius: "10px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CategorySearchComponent(props) {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const showListsCategory = props?.listsCategory?.map((e, index) => {
    return <MenuItem value={10}>{e.categoryName}</MenuItem>;
  });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <Select
          value={value}
          onChange={handleChange}
          displayEmpty
          //   className={classes.selectEmpty}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>All Category</em>
          </MenuItem>
          {showListsCategory}
        </Select>
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <InputBase
        className={classes.input}
        placeholder="Search Product"
        inputProps={{ "aria-label": "search product" }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
