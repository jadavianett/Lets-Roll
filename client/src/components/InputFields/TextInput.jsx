import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();

  return (
    <form noValidate autoComplete="off">
      <TextField
        className="new-place-input"
        type={props.type}
        id="outlined-basic"
        label={props.label}
        variant="outlined"
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </form>
  );
}
