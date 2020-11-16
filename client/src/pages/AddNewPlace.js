import "./Pages.css";
import TextInput from "../components/InputFields/TextInput";
import Select from "../components/InputFields/Select";
import Button from "@material-ui/core/Button";
import { React, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../Utils/API";
import AuthContext from "../context/AuthContext";

//displays form to Add a new Place 
function AddNewPlace() {
  //declares useHistory 
  const history = useHistory();
  //declares states 
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [notes, setNotes] = useState([]);
  
  //declares ustContext for jwt 
  const { jwt } = useContext(AuthContext);

  //on click of the Save button function 
  const handleSave = (e) => {
    e.preventDefault();
    // creates a new skate Place 
    API.createPlace(
      {
        name: name,
        location: location,
        notes: notes,
        type: type,
      },
      jwt
    )
      .then((res) => {
        //if created takes to myplaces page 
        history.push("/myplaces");
      })
      .catch((err) => {
        throw err;
      });
  };

  //onChange function when text is added to inputs it sets the state for each: Name, Location, Notes, and Type
  const onChangeInfo = (e) => {
    let value = e.target.value;
    if (e.target.name === "name") {
      setName(value);
    } else if (e.target.name === "location") {
      setLocation(value);
    } else if (e.target.name === "notes") {
      setNotes(value);
    } else if (e.target.name === "type") {
      setType(value);
    }
  };
  return (
    <>
      <div className="body-wrapper">
        <div className="content-wrapper">
          <h1>Add a New Skate Place</h1>
          <br />
          <br />
          <TextInput name="name" placeholder="Name" onChange={onChangeInfo} />
          <TextInput
            name="location"
            placeholder="Location"
            onChange={onChangeInfo}
          />
          <textarea
            className="text-area"
            name="notes"
            placeholder="Helpful tips on this place?"
            onChange={onChangeInfo}
          />
          <Select
            name="type"
            onChange={onChangeInfo}
            value={type}
            label="Type"
          />
          <br />
          <br />
          <Button
            type="submit"
            size="large"
            variant="contained"
            onClick={handleSave}
            id="save-place-btn"
          >
            Save Place
          </Button>
        </div>
      </div>
    </>
  );
}
export default AddNewPlace;
