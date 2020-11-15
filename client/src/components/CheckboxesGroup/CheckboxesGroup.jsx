import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function CheckboxesGroup({
  handleChange,
  crossover,
  crazyLegs,
  dribbling,
  transitions,
  grapevine,
  shootTheDuck,
  waltzJump,
  mohawkTurn,
  heelToeSpins,
  spinJump,
}) {
  return (
    <>
      <FormControl component="fieldset" id="checkbox-div-1">
        <FormGroup id="checkbox-div-2">
          <div id="skill-column">
            <FormControlLabel
              className="skill-checkbox"
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
              className="skill-checkbox"
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
              className="skill-checkbox"
              control={
                <Checkbox
                  checked={dribbling}
                  onChange={handleChange}
                  name="dribbling"
                />
              }
              label="Dribbling"
            />
            <FormControlLabel
              className="skill-checkbox"
              control={
                <Checkbox
                  checked={transitions}
                  onChange={handleChange}
                  name="transitions"
                />
              }
              label="Transitions"
            />
            <FormControlLabel
              className="skill-checkbox"
              control={
                <Checkbox
                  checked={grapevine}
                  onChange={handleChange}
                  name="grapevine"
                />
              }
              label="Grapevine"
            />
            <FormControlLabel
              className="skill-checkbox"
              control={
                <Checkbox
                  checked={shootTheDuck}
                  onChange={handleChange}
                  name="shootTheDuck"
                />
              }
              label="Shoot The Duck"
            />
            <FormControlLabel
              className="skill-checkbox"
              control={
                <Checkbox
                  checked={waltzJump}
                  onChange={handleChange}
                  name="waltzJump"
                />
              }
              label="Waltz Jump"
            />
            <FormControlLabel
              className="skill-checkbox"
              control={
                <Checkbox
                  checked={mohawkTurn}
                  onChange={handleChange}
                  name="mohawkTurn"
                />
              }
              label="Mohawk Turn"
            />
            <FormControlLabel
              className="skill-checkbox"
              control={
                <Checkbox
                  checked={heelToeSpins}
                  onChange={handleChange}
                  name="heelToeSpins"
                />
              }
              label="Heel Toe Spins"
            />
            <FormControlLabel
              className="skill-checkbox"
              control={
                <Checkbox
                  checked={spinJump}
                  onChange={handleChange}
                  name="spinJump"
                />
              }
              label="360 Jumps"
            />
          </div>
        </FormGroup>
      </FormControl>
    </>
  );
}
