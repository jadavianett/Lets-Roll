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

export default function CheckboxesGroup(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Your skills</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.crossover}
                onChange={props.handleChange}
                name="crossover"
              />
            }
            label="Crossover"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.crazyLegs}
                onChange={props.handleChange}
                name="crazyLegs"
              />
            }
            label="Crazy Legs"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.dribbling}
                onChange={props.handleChange}
                name="dribbling"
              />
            }
            label="Dribbling"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.transitions}
                onChange={props.handleChange}
                name="transitions"
              />
            }
            label="Transitions"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.grapevine}
                onChange={props.handleChange}
                name="grapevine"
              />
            }
            label="Grapevine"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.shootTheDuck}
                onChange={props.handleChange}
                name="shootTheDuck"
              />
            }
            label="Shoot The Duck"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.waltzJump}
                onChange={props.handleChange}
                name="waltzJump"
              />
            }
            label="Waltz Jump"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.mohawkTurn}
                onChange={props.handleChange}
                name="mohawkTurn"
              />
            }
            label="Mohawk Turn"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.heelToeSpins}
                onChange={props.handleChange}
                name="heelToeSpins"
              />
            }
            label="Heel Toe Spins"
          />
        </FormGroup>
      </FormControl>
      <FormControl
        required
        error={props.error}
        component="fieldset"
        className={classes.formControl}
      ></FormControl>
    </div>
  );
}
