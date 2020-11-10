import "./OneSkatePlace.css";
import Paper from "../components/Paper";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../Utils/API";

function OneSkatePlace() {
  const { id } = useParams();
  const [place, setPlace] = useState({});

  useEffect(() => {
    API.getPlace(id)
      .then((res) => {
        console.log("one skate place" + res.data);
        setPlace(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, [id]);

  return (
    <>
      <div className="page-wrapper-with-nav">
        <div id="one-place-wrapper">
          <h1>{place.name}</h1>
          <br />
          <br />
          <img
            src="https://via.placeholder.com/300x300.png"
            alt="placeholder"
          ></img>
          <br />
          <br /> <br /> <br />
          <h3>See what others have said about this place!</h3>
          <br />
          <br />
          <Paper />
          <Paper />
          <Paper />
          <p>
            <br />
            <br />
            <Link to="/allplaces">
              <Button variant="contained">VIEW ALL SKATE PLACES</Button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default OneSkatePlace;
