import "./Pages.css";
import Paper from "../components/Paper";
import Button from "@material-ui/core/Button";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../Utils/API";
import ExploreIcon from '@material-ui/icons/Explore';

function OneSkatePlace() {
  const { id } = useParams();
  const [place, setPlace] = useState({});

  useEffect(() => {
    API.getPlace(id)
      .then((res) => {
        console.log("one skate place" + res.data);
        setPlace(res.data);
        console.log(res);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <>
      <div className="body-wrapper">
        <div className="content-wrapper">
          <h1>{place.name}</h1>
          <h2>{place.location}</h2>
          <br />
          <br />
          <img
            src={place.image}
            alt={place.name}
            width="600px"
            height="400px"
          ></img>
          <br />
          <br /> <br /> <br />
          <h3>Here's what other Rollers have to say about this location:</h3>
          <br />
          {place.notes && place.notes.map((note) => <Paper notes={note} />)}
          <p>
            <br />
            <br />
            <Link to="/allplaces" className="no-link-style">
              <Button variant="contained"> <ExploreIcon/> &nbsp; BACK TO ALL SKATE PLACES</Button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default OneSkatePlace;
