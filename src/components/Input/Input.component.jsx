import React from "react";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import "./input.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

export default function InputComponent(props) {
  const classes = useStyles();

  return (
    <div className={"input " + classes.root}>
      <FormControl fullWidth variant="outlined">
        <FilledInput
          id="filled-adornment-amount"
          startAdornment={
            <InputAdornment position="start">{props.data.title}</InputAdornment>
          }
          variant="outlined"
          type={props.data.type}
          name={props.data.name}
          onChange={props.handleChangeInput}
        />
      </FormControl>
    </div>
  );
}
