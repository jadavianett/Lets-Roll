// import "./EditPlace.css";
import "./Pages.css";
import TextInput from "../components/TextInput";
import Select from "../components/Select";
import Button from "@material-ui/core/Button";
import { React, useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import API from "../Utils/API";

function EditPlace() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [notes, setNotes] = useState([]);
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
        setNotes(res.data.notes);
      })
      .catch((err) => {
        throw err;
      });
  }, [id]);

  const handleSave = (e) => {
    e.preventDefault();
    console.log("clicked save");
    //API call to "put" a place, updatePlace
    API.updatePlace(id, {
      name: name,
      location: location,
      type: type,
      notes: notes,
    })
      .then((res) => {
        console.log(res.data);
        history.push("/myplaces");
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
        history.push("/myplaces");
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
    } else if (e.target.name === "notes") {
      setNotes(value);
    } else if (e.target.name === "type") {
      setType(value);
      //   console.log("State changed: place type");
    }
  };

  return (
    <>
      <div className="body-wrapper">
        <div className="content-wrapper">
          <h2>Edit Place:</h2>
          <br />
          <h1>{name}</h1>
          <br />
          <br />
          <label for="name">Name</label>
          <TextInput name="name" placeholder={name} onChange={onChangeInfo} />
          <label for="location">Location</label>
          <TextInput
            name="location"
            placeholder={location}
            onChange={onChangeInfo}
          />
          <label for="notes">Notes</label>
          <TextInput name="notes" placeholder={notes} onChange={onChangeInfo} />
          <label for="type">Skate Place Type</label>
          <Select name="type" onChange={onChangeInfo} value={type} />
          <br />
          <br />

          <Link to="/viewmyplaces">
            <Button
              type="submit"
              size="large"
              variant="contained"
              onClick={handleSave}
            >
              Save Changes
            </Button>
          </Link>
          <br />
          <br />

          <Button
            size="large"
            variant="contained"
            color="secondary"
            onClick={handleDelete}
          >
            DELETE PLACE
          </Button>
        </div>
      </div>
    </>
  );
}

export default EditPlace;
