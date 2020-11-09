import TextInput from "../components/TextInput";
import Select from "../components/Select";
import Button from "@material-ui/core/Button";
import { React, useState } from "react";
import API from "../Utils/API";

function AddNewPlace() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  //   const [notes, setNotes] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    console.log("clicked");

    API.createPlace({
      name,
      location,
      //   notes,
      type,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        throw err;
      });
  };

  const onChangeInfo = (e) => {
    let value = e.target.value;

    if (e.target.name === "name") {
      setName(value);
    } else if (e.target.name === "location") {
      setLocation(value);
      // } else if (e.target.name === "notes") {
      //   setNotes(value);
    } else if (e.target.name === "type") {
      setType(value);
      //   console.log("State changed: place type");
    }
  };

  return (
    <div>
      <h1>ADD A NEW SKATE PLACE</h1>
      <TextInput name="name" placeholder="NAME" onChange={onChangeInfo} />
      <TextInput
        name="location"
        placeholder="ADDRESS"
        onChange={onChangeInfo}
      />
      {/* <TextInput
        name="notes"
        placeholder="NOTES"
        onChange={onChangeInfo}
      /> */}
      <Select name="type" onChange={onChangeInfo} value={type} />
      <Button
        type="submit"
        size="large"
        variant="contained"
        onClick={handleSave}
      >
        Save Place
      </Button>
    </div>
  );
}

export default AddNewPlace;
