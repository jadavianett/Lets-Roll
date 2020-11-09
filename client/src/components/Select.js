import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects(props) {
  const classes = useStyles();

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Type</InputLabel>
        <Select
          native
          value={props.value}
          onChange={props.onChange}
          label="Type"
          inputProps={{
            name: "type",
            id: "outlined-age-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option value={"Skate Park"}>Skate Park</option>
          <option value={"Outdoor rink"}>Outdoor rink</option>
          <option value={"Beltline"}>Beltline</option>
          <option value={"Trail"}>Trail</option>
          <option value={"Greenway"}>Greenway</option>
          <option value={"Park"}>Park</option>
          <option value={"Other"}>Other</option>
        </Select>
      </FormControl>
    </div>
  );
}
