import "./AllPlaces.css";
import AllPlacesCard from "../components/Places/AllPlacesCard";
import axios from "axios";
import { useEffect, useState } from "react";
import API from "../Utils/API";

function AllPlaces() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    API.getPlaces()
      .then((res) => {
        console.log(res.data);
        setPlaces(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <>
      <div className="page-wrapper-with-nav">
        <div id="all-places-wrapper">
          <h1>All Skate Places</h1>
          <br />
          <br />
          <p>(Search filters to go here)</p>
          <div className="centerMe">
            {places.map((place) => (
              // <div className="wide-card">
              <AllPlacesCard
                image="https://via.placeholder.com/345x300.png"
                name={place.name}
                location={place.location}
                type={place.type}
                id={place._id}
              />
              // </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllPlaces;
