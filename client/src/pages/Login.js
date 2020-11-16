import "./Pages.css";
import AuthContext from "../context/AuthContext";
import TextInput from "../components/InputFields/TextInput";
import { Button } from "@material-ui/core";
import Snackbar from "../components/SnackBar/SnackBar";
import axios from "axios";
import { Link } from "react-router-dom";
import { React, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

// Display Login form and navigation to pages avialable to not logged In users 
function Login() {
  //Declare state 
  const [emailAddress, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [buttonVal, setButtonVal] = useState("");

  //Grabs setJwt function from Context 
  const { setJwt } = useContext(AuthContext);
  
  //declares useHistory 
  const history = useHistory();


  // closes snackbar 
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    //toggles snackbar state 
    setOpen(false);
  };

  //handles login submit 
  const handleLogin = (e) => {
    e.preventDefault();

    // input validation, toggles snackbar state 
    if (emailAddress === "") {
      setOpen(true);
      setMessage("Invalid Email.");
      setButtonVal("Try Again");
    } else if (password === "") {
      setOpen(true);
      setMessage("Invalid Password.");
      setButtonVal("Try Again");
    } else {
      // if user login inout is true  get call for specific user.
      axios
      //user authorization creates jwt Token to be passed through 
        .post("/api/login", { emailAddress, password })
        .then((response) => {
          // sets JWT state and locat storage 
          setJwt(response.data.data);
          sessionStorage.setItem("jwt", response.data.data);
          //toggles snackbar 
          setOpen(true);
          setMessage("Login successful");
          setButtonVal("woo");
          //sends user to dashboard 
          history.push("/userdashboard");
        })
        .catch((err) => {
          // toggles snackbar if user is not found
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
