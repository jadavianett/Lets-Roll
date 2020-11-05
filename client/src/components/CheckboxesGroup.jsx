import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    crossover: false,
    crazyLegs: false,
    dribbling: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { crossover, crazyLegs, dribbling } = state;
  const error = [crossover, crazyLegs, dribbling].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Your skills</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={crossover}
                onChange={handleChange}
                name="crossover"
              />
            }
            label="Crossover"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={crazyLegs}
                onChange={handleChange}
                name="crazyLegs"
              />
            }
            label="Crazy Legs"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={dribbling}
                onChange={handleChange}
                name="dribbling"
              />
            }
            label="Dribbling"
          />
        </FormGroup>
      </FormControl>
      <FormControl
        required
        error={error}
        component="fieldset"
        className={classes.formControl}
      ></FormControl>
    </div>
  );
}
