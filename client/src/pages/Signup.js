import "./Pages.css";
import DatePicker from "../components/DatePicker/DatePicker";
import TextInput from "../components/InputFields/TextInput";
import CheckboxesGroup from "../components/CheckboxesGroup/CheckboxesGroup";
import { Button } from "@material-ui/core";
import Snackbar from "../components/SnackBar/SnackBar";
import API from "../Utils/API";
import AuthContext from "../context/AuthContext";
import { React, useState, useContext } from "react";
import { useHistory } from "react-router-dom";



// Creates a new user 
function Signup() {
  // declared states 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { setJwt } = useContext(AuthContext);
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [buttonVal, setButtonVal] = useState("");

  const [location, setLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [skills, setSkills] = useState({
    crossover: false,
    crazyLegs: false,
    dribbling: false,
    transitions: false,
    grapevine: false,
    shootTheDuck: false,
    waltzJump: false,
    mohawkTurn: false,
    heelToeSpins: false,
    spinJump: false,
  });

  // function to close snackbar 
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    // toggles Open state 
    setOpen(false);
  };

  // function to handles changes in the check box 
  const handleChange = (event) => {
    //sets skills state  on change 
    setSkills({ ...skills, [event.target.name]: event.target.checked });
  };

 

  // handles changes in the datePicker component 
  const handleDateChange = (date) => {
    //sets selectedDate state on change 
    setSelectedDate(date);
  
  };

  // On submit of the signup button, creates user and input validation 
  const handleSubmit = (e) => {
    e.preventDefault();

    //sets state for username, email, password, uservalidation triggers snackbar 
    if (username === "") {
      setOpen(true);
      setMessage("Invalid Username.");
      setButtonVal("Try Again");
    } else if (email === "") {
      setOpen(true);
      setMessage("Invalid Email.");
      setButtonVal("Try Again");
    } else if (password === "") {
      setOpen(true);
      setMessage("Invalid Password.");
      setButtonVal("Try Again");
    } else {
      setOpen(true);
      setMessage("Login successful");
      setButtonVal("OK");
    
      //api call to create a new user 
      API.signupUser({
        username,
        email,
        password,
        skateSince: selectedDate,
        location,
        skills,
      })
        .then((res) => {
        
          setJwt(res.data.data);
          //sets session storage with newly created jwt 
          sessionStorage.setItem("jwt", res.data.data);
          //sends new User to dashboard 
          history.push("/userdashboard");
        })
        .catch((err) => {
          return err;
        });
    }
  };

  return (
    <>
      <div className="body-wrapper">
        <div id="signup-wrapper">
          <h1>Sign up below to get rollin'.</h1>
          <br />
          <br />
          <br />
          <div className="signup-form" onSubmit={handleSubmit}>
            <TextInput
              label="Enter a new username"
              name="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <TextInput
              label="Enter a new email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextInput
              type="password"
              label="Enter a new password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <label htmlFor="skateDate">When did you start skating?</label>
            <DatePicker
              label="When did you start skating?"
              name="skateSince"
              handleDateChange={handleDateChange}
              selectedDate={selectedDate}
            />
            <br />
            <br />
            <p>Your skills:</p>
            <br />
            <CheckboxesGroup name={skills} handleChange={handleChange} />

            <p>Where do you skate?</p>
            <TextInput
              label="Your Location"
              name="location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
            <Snackbar
              onClose={handleClose}
              open={open}
              message={message}
              value={buttonVal}
            />
            <br />
            <Button
              type="button"
              size="large"
              variant="contained"
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signup;
