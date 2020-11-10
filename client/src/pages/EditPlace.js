import TextInput from "../components/TextInput";
import Select from "../components/Select";
import Button from "@material-ui/core/Button";
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../Utils/API";

function EditPlace() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  //   const [notes, setNotes] = useState("");
  const { id } = useParams();

  useEffect(() => {
    //code Here
    API.getPlace(id)
      .then((res) => {
        console.log(res);
        setName(res.data.name);
        setLocation(res.data.location);
        setType(res.data.type);
      })
      .catch((err) => {
        throw err;
      });
  }, [id]);

  const handleSave = (e) => {
    e.preventDefault();
    console.log("clicked save");
    //API call to "put" a place, updatePlace
    API.updatePlace(id, { name: name, location: location, type: type })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        throw err;
      });
  };

  const handleDelete = (e) => {
    console.log("clicked delete");
    API.deletePlace(id)
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
      <h1>Edit {name}</h1>
      <label for="name">Name</label>
      <TextInput name="name" placeholder={name} onChange={onChangeInfo} />
      <label for="location">Location</label>
      <TextInput
        name="location"
        placeholder={location}
        onChange={onChangeInfo}
      />
      {/* <TextInput
        name="notes"
        placeholder="NOTES"
        onChange={onChangeInfo}
      /> */}
      <label for="type">Skate Place Type</label>
      <Select name="type" onChange={onChangeInfo} value={type} />
      <Button
        type="submit"
        size="large"
        variant="contained"
        onClick={handleSave}
      >
        Save Place
      </Button>
      <br />
      <br />
      <p>
        <Button
          size="large"
          variant="contained"
          color="secondary"
          onClick={handleDelete}
        >
          DELETE PLACE
        </Button>
      </p>
    </div>
  );
}

export default EditPlace;
