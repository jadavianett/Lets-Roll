import "./Login.css";
import AuthContext from "../context/AuthContext";
import TextInput from "../components/TextInput";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import { React, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const [emailAddress, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { jwt, setJwt } = useContext(AuthContext);
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login clicked");

    axios
      .post("/api/login", { emailAddress, password })
      .then((response) => {
        console.log(response.data.data);
        setJwt(response.data.data);

        history.push("/userdashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    // <Container>
    <>
      <div className="page-wrapper-with-nav">
        <div id="login-wrapper">
          <h1>Log In and Let's Roll!</h1>
          <br />
          <TextInput
            label="Email"
            name="email"
            value={emailAddress}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextInput
            label="Password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <Button variant="contained" type="submit" onClick={handleLogin}>
            LOG IN
          </Button>
          <br />
          <br />
          <br />
          <br />

          <p>Don't have an account?</p>
          <br />
          <Button variant="contained">
            <Link to="/signup" className="no-link-style">
              SIGN UP HERE
            </Link>
          </Button>
          <br />
          <br />
          <br />
          <br />
          <p>
            You may also&nbsp;
            <Link to="/allplaces">view skate places without logging in.</Link>
          </p>
        </div>
      </div>
      {/* </Container>  */}
    </>
  );
}

export default Login;
