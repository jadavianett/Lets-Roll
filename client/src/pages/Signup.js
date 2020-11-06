import DatePicker from "../components/DatePicker";
import TextInput from "../components/TextInput";
import CheckboxesGroup from "../components/CheckboxesGroup";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { React, useState } from "react";

function Signup() {
  const [username, setUsername] = useState("de");
  const [password, setPassword] = useState("fault");
  return (
    <>
      <Container>
        <h1>This is the signup page.</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("submitted");
          }}
        >
          <input
            label="Enter a username"
            name="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            label="Enter a password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <DatePicker label="When did you start skating?" />
          <CheckboxesGroup />
          <TextInput label="Your Location" />
          <Button type="submit" size="large" variant="contained">
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
}

export default Signup;
