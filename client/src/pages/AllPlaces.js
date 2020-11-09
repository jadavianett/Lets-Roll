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
    <div>
      <h1>This is the all skate places page.</h1>

      {places.map((place) => (
        <AllPlacesCard
          image="https://via.placeholder.com/345x140.png"
          name={place.name}
          location={place.location}
          type={place.type}
        />
      ))}
    </div>
  );
}

export default AllPlaces;
