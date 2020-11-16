import "./Pages.css";
import TextInput from "../components/InputFields/TextInput";
import Select from "../components/InputFields/Select";
import Button from "@material-ui/core/Button";
import { React, useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import API from "../Utils/API";

// Page shows a form to edit a specific place 
function EditPlace() {
  //declares useHistory hook 
  const history = useHistory();
  // declares states useState hook 
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [notes, setNotes] = useState([]);
  const [deletePlace, setDeletePlace] = useState(false);
  //declares useParams hook 
  const { id } = useParams();

  // on load gets the id for the specified place and returns placeholder info Name, Location, Type, Notes to be edited
  useEffect(() => {
    API.getPlace(id)
      .then((res) => {
        setName(res.data.name);
        setLocation(res.data.location);
        setType(res.data.type);
        setNotes(res.data.notes);
      })
      .catch((err) => {
        throw err;
      });
  }, [id]);

  // onClick of save button updates place info
  const handleSave = (e) => {
    e.preventDefault();

    //api call to update place information 
    API.updatePlace(id, {
      name: name,
      location: location,
      type: type,
      notes: notes,
    })
      .then((res) => {
        // sends to myplaces page 
        history.push("/myplaces");
      })
      .catch((err) => {
        throw err;
      });
  };

  // onClick of Delete button. Deletes place from db 
  const handleDelete = (e) => {
    //api call to delete place by id 
    API.deletePlace(id)
      .then((res) => {
        history.push("/myplaces");
      })
      .catch((err) => {
        throw err;
      });
  };

  // on change of input fields sets Place info values Name, Location,Notes, type 
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
          <h2>Edit Place:</h2>
          <br />
          <h1>{name}</h1>
          <br />
          <br />
          <div id="edit-form">
            <label for="name">Name</label>
            <TextInput name="name" placeholder={name} onChange={onChangeInfo} />
            <label for="location">Location</label>
            <TextInput
              name="location"
              placeholder={location}
              onChange={onChangeInfo}
            />
            <label for="notes">Notes</label>
            <TextInput
              name="notes"
              placeholder={notes}
              onChange={onChangeInfo}
            />
            <label for="type">Skate Place Type</label>
            <Select name="type" onChange={onChangeInfo} value={type} />
            <br />
            <br />
            <Link to="/viewmyplaces" className="no-link-style">
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
            {deletePlace ? (
              <Button
                className="delete-btn"
                size="large"
                variant="contained"
                onClick={() => {
                  setDeletePlace(false);
                  handleDelete();
                }}
              >
                CLICK AGAIN TO CONFIRM
              </Button>
            ) : (
              <Button
                className="delete-btn"
                size="large"
                variant="contained"
                onClick={() => {
                  setDeletePlace(true);
                }}
              >
                DELETE THIS PLACE
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPlace;
