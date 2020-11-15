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

export default function NativeSelects({ label, value, onChange, text }) {
  const classes = useStyles();

  return (
    <div>
      <FormControl variant="outlined" id="new-place-type-select">
        <InputLabel htmlFor="outlined-age-native-simple">{label}</InputLabel>
        <Select
          native
          value={value}
          onChange={onChange}
          label="Type"
          inputProps={{
            name: "type",
            id: "outlined-age-native-simple",
          }}
        >
          <option aria-label="None"> {text} </option>
          <option value="Skate Park">Skate Park</option>
          <option value="Outdoor Rink">Outdoor Rink</option>
          <option value="Beltline">Beltline</option>
          <option value="Trail">Trail</option>
          <option value="Greenway">Greenway</option>
          <option value="Park">Park</option>
          <option value="Other">Other</option>
        </Select>
      </FormControl>
    </div>
  );
}
