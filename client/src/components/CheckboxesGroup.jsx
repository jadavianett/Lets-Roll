import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
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
  return (
    <>
      <FormControl component="fieldset" id="checkbox-div-1">
        <FormGroup id="checkbox-div-2">
          <div id="skill-column">
            {/* <div className="skill-column"> */}
            <FormControlLabel
              className="skill-checkbox"
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
              className="skill-checkbox"
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
              className="skill-checkbox"
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
              className="skill-checkbox"
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
              className="skill-checkbox"
              control={
                <Checkbox
                  checked={props.grapevine}
                  onChange={props.handleChange}
                  name="grapevine"
                />
              }
              label="Grapevine"
            />
            {/* </div> */}
            {/* end column 1 */}
            {/* <div className="skill-column"> */}
            <FormControlLabel
              className="skill-checkbox"
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
              className="skill-checkbox"
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
              className="skill-checkbox"
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
              className="skill-checkbox"
              control={
                <Checkbox
                  checked={props.heelToeSpins}
                  onChange={props.handleChange}
                  name="heelToeSpins"
                />
              }
              label="Heel Toe Spins"
            />
            <FormControlLabel
              className="skill-checkbox"
              control={
                <Checkbox
                  checked={props.spinJump}
                  onChange={props.handleChange}
                  name="spinJump"
                />
              }
              label="360 Jumps"
            />
            {/* </div> */}
          </div>
        </FormGroup>
      </FormControl>
    </>
  );
}
