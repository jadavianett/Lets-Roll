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
  // const [state, setState] = React.useState({
  //   crossover: false,
  //   crazyLegs: false,
  //   dribbling: false,
  //   transitions: false, 
  //   grapevine: false,
  //   shootTheDuck: false, 
  //   waltzJump: false,
  //   mohawkTurn: false,
  //   heelToeSpins: false,
  // });

  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  // const { crossover, crazyLegs, dribbling, transitions, grapevine, shootTheDuck, waltzJump, mohawkTurn, heelToeSpins } = state;
  // const error = [crossover, crazyLegs, dribbling, transitions, grapevine, shootTheDuck, waltzJump, mohawkTurn, heelToeSpins].filter((v) => v).length !== 2;
const skillList = ["crossover", "crazyLegs", "dribbling", "transitions", "grapevine", "shootTheDuck", "waltzJump", "mohawkTurn", "heelToeSpins"]
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
