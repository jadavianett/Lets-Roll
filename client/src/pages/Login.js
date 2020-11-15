import "./Pages.css";
import AuthContext from "../context/AuthContext";
import TextInput from "../components/InputFields/TextInput";
import { Button } from "@material-ui/core";
import Snackbar from "../components/SnackBar/SnackBar";
import axios from "axios";
import { Link } from "react-router-dom";
import { React, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const [emailAddress, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setJwt } = useContext(AuthContext);
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [buttonVal, setButtonVal] = useState("");

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (emailAddress === "") {
      setOpen(true);
      setMessage("Invalid Email.");
      setButtonVal("Try Again");
    } else if (password === "") {
      setOpen(true);
      setMessage("Invalid Password.");
      setButtonVal("Try Again");
    } else {
      axios
        .post("/api/login", { emailAddress, password })
        .then((response) => {
          setJwt(response.data.data);
          sessionStorage.setItem("jwt", response.data.data);
          setOpen(true);
          setMessage("Login successful");
          setButtonVal("woo");
          history.push("/userdashboard");
        })
        .catch((err) => {
          console.log(err);
          setOpen(true);
          setMessage("Invalid User");
          setButtonVal("Try Again");
        });
    }
  };

  return (
    <>
      <div className="body-wrapper">
        <div className="content-wrapper">
          <h1 className="animated-title">Log In and Let's Roll!</h1>
          <br />
          <div className="login-form" onSubmit={handleLogin}>
            <TextInput
              label="Email"
              name="email"
              value={emailAddress}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Snackbar
              onClose={handleClose}
              open={open}
              message={message}
              value={buttonVal}
            />
            <TextInput
              type="password"
              label="Password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <div>
              <Button
                variant="contained"
                type="button"
                onClick={handleLogin}
                id="log-in-button"
              >
                LOG IN
              </Button>
            </div>
          </div>
          <br />
          <br />
          <hr />
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

          <p>
            You may also&nbsp;
            <Link to="/allplaces">view skate places without logging in.</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
