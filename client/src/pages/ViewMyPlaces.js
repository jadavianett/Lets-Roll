import MyPlacesCard from "../components/Places/MyPlacesCard";
import AuthContext from "../context/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import API from "../Utils/API";

function ViewMyPlaces() {
  const [user, setUser] = useState({});
  const [places, setPlaces] = useState([]);
  const { jwt } = useContext(AuthContext);

  useEffect(() => {
    if (jwt) {
      var decoded = jwt_decode(jwt);
      console.log(decoded);
      setUser(decoded);
      console.log(decoded.username);
    }

    //get all the places from the DB
    API.getPlaces()
      .then((res) => {
        console.log(res.data);
        console.log("user id" + user._id);
        var placesWithId = res.data.filter( x => x.creatorId  === user._id)
        console.log(placesWithId);
        setPlaces(res.data);
      })
      .catch((err) => {
        throw err;
      });
  },[]);

  return (
    <div>
      <h1>This is the view all my places page.</h1>
      <MyPlacesCard />
      <MyPlacesCard />
      <MyPlacesCard />
      <MyPlacesCard />
      <MyPlacesCard />
      <MyPlacesCard />
      {places.map((place) => (
        <MyPlacesCard
          image="https://via.placeholder.com/345x140.png"
          name={place.name}
          location={place.location}
          type={place.type}
          id={place._id}
        />
      ))}

    </div>
  );
}

export default ViewMyPlaces;
