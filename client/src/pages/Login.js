import "./Login.css";
import AuthContext from "../context/AuthContext";
import TextInput from "../components/TextInput";
import { Button, FormGroup }from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import Snackbar from "../components/SnackBar";
import axios from "axios";
import { Link } from "react-router-dom";
import { React, useState, useContext } from "react";
import { useHistory } from "react-router-dom";


function Login() {

  const [emailAddress, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { jwt, setJwt } = useContext(AuthContext);
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [buttonVal, setButtonVal] = useState("");

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    
  };


 
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login clicked');

  //  let name = e.target.name
  //  console.log(name.val,"name")
  //  let  value= e.target.value
  
    if(emailAddress === "" ){
    
    console.log("here")
    setOpen(true);
    setMessage('Invalid Email.')
    setButtonVal('Try Again')
    
    //    if (/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/.test(value) || value === "")
    //     {
    //       console.log("true")
    //       return (true)
    //     }
    //       alert("You have entered an invalid email address!")
    //       return (false)
    } else if(password === ""){
      setOpen(true);
      setMessage('Invalid Password.')
      setButtonVal('Try Again')

    } else {
      setOpen(true); 
      setMessage('Login successful');
      setButtonVal('woo')


      axios
      .post("/api/login", { emailAddress, password })
      .then((response) => {
        console.log(response.data.data);
        setJwt(response.data.data);
        history.push("/userdashboard");
      })
      .catch((err) => {
        console.log(err);
      })
    };
  };

  return (
    // <Container>
    <>
      <div className="page-wrapper-with-nav">
        <div id="login-wrapper">
          <h1>Log In and Let's Roll!</h1>
          <br />
          <FormGroup>
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

          <Button variant="contained" type="submit" onClick={handleLogin}>
            LOG IN
          </Button>
          </FormGroup>
          <br />
          <br />
          <br />
          <br />
         

          <p>Don't have an account?</p>
          <br />
          <Button variant="contained" >
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
