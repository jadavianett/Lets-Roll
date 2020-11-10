import TextInput from "../components/TextInput";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import { React, useState } from "react";

function Login() {
  const [emailAddress, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login clicked");

    axios
      .post("/api/login", { emailAddress, password })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <div className> </div>
      <h1>LETS ROLL</h1>

      <h4> JOIN THE SK8 COMMUNITY</h4>

      <TextInput
        label="ENTER EMAIL HERE"
        name="email"
        value={emailAddress}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextInput
        label="ENTER PASSWORD HERE"
        name="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <Button variant="contained" type="submit" onClick={handleLogin}>
        LOG IN
      </Button>

      <Link to="/signup">
        <h4>DON'T HAVE AN ACCOUNT? SIGN UP HERE</h4>
      </Link>

      <Link to="/allplaces">
        <Button variant="contained">
          VIEW SKATE PLACES WITHOUT LOGGING IN
        </Button>
      </Link>
    </Container>
  );
}

export default Login;
