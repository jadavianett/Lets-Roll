import DatePicker from "../components/DatePicker";
import TextInput from "../components/TextInput";
import CheckboxesGroup from "../components/CheckboxesGroup";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { React, useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 
  const [skills,setSkills] =useState([]);
 
  const [location, setLocation] = useState(""); 
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date,"Date")
  };


  const handleSubmit = e => {
    e.preventDefault();

    console.log("username is " + username);
    console.log("password is " + password);
    // console.log("skateStart" + selectedDate ); 
    console.log("location" + location);
  };


  const onChangeUser = e => {

    let value = e.target.value; 
      // console.log(e.target.name, "what is it")

    if(e.target.name == "username") {
      setUsername({
        username: value
      });
    } else if(e.target.name == "password") {
      setPassword({
        password: value
      });
    } else (e.target.)
  };
   


  return (
    <>
      <Container>
        <h1>This is the signup page.</h1>
        <form onSubmit={handleSubmit}>
          <TextInput label="Enter a username" name="username" value={username} onChange={onChangeUser}/>
          <TextInput label="Enter a password"  name="password" value={password} onChange={onChangeUser} />
          <DatePicker label="When did you start skating?" name="skateDate" handleDateChange={handleDateChange} selectedDate={selectedDate} />
          <CheckboxesGroup />
          <TextInput label="Your Location" name="location" value={location} onChange={onChangeUser} />
          <Button type="submit" size="large" variant="contained">
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
}

export default Signup;
