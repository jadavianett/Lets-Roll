import "./Pages.css";
import Paper from "../components/Paper/Paper";
import Button from "@material-ui/core/Button";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../Utils/API";
import ExploreIcon from "@material-ui/icons/Explore";

function OneSkatePlace() {
  const { id } = useParams();
  const [place, setPlace] = useState({});

  useEffect(() => {
    API.getPlace(id)
      .then((res) => {
        
        setPlace(res.data);

      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <>
      <div className="body-wrapper">
        <div className="places-wrapper">
          <h3>Currently viewing information for:</h3>
          <h1>{place.name}</h1>
          <h2>{place.location}</h2>
          <br />
          <br />
          <img
            src={
              place.image
                ? place.image
                : "https://images.pexels.com/photos/2005992/pexels-photo-2005992.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            }
            alt={place.name}
            width="100%"
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
              <Button variant="contained">
                {" "}
                <ExploreIcon /> &nbsp; BACK TO ALL SKATE PLACES
              </Button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default OneSkatePlace;
