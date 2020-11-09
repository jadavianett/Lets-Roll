import TextInput from "../components/TextInput"; 
import Select from "../components/Select";
import Button from "@material-ui/core/Button";
import { React, useState } from "react";
import API from "../Utils/API";

function AddNewPlace () {

    const [type, setType] = useState({
        type: ''
      });

    const [name, setName] = useState({
        name: ''
    }); 
    const [location, setLocation] = useState({
        location: ''
    });
    const [notes, setNotes] = useState({
        notes: ''
    });  


      const handleSave  = e => {
          e.preventDefault(); 
          console.log("clicked"); 

          API.createPlace({
            name, 
            location, 
            notes,
            type
          }).then((res) => {
              console.log(res.data)
          }).catch ((err) => {
              err
          })
      };

      const onChangeInfo = e => {

        let name = e.target.value; 
        
    
        if(e.target.name == "name") {
          setName(
             name
          );
        } else if(e.target.name == "location") {
          setLocation(
             name
          );
        }else if (e.target.name == "notes") {
            setNotes(
                name
            )
        } else if (e.target.name == "type") {
            setType(
                name
            )
        };
      };


    return (
        <div>
            <h1>ADD A NEW SKATE PLACE</h1>
            <TextInput name="name" placeholder="NAME" handleChange={onChangeInfo}/>
            <TextInput name="location" placeholder="ADDRESS" handleChange={onChangeInfo} />
            <TextInput name="notes" placeholder="HEPFUL TIPS" handleChange={onChangeInfo} />
            <Select name={"type"} handleChange={onChangeInfo} value={type} />
            <Button type="submit" size="large" variant="contained" onClick={handleSave}>
            Save Place
            </Button>
        


        </div>
    )
}

export default AddNewPlace;