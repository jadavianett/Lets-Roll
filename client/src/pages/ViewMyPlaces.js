// import "./ViewMyPlaces.css";
import "./Pages.css";
import MyPlacesCard from "../components/MyPlacesCard";
import AuthContext from "../context/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import API from "../Utils/API";

function ViewMyPlaces() {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState("");

  const [places, setPlaces] = useState([]);
  //for display
  const [myPlaces, setMyPlaces] = useState([]);
  const { jwt } = useContext(AuthContext);

  useEffect(() => {
    async function functionName() {
      console.log("jwt " + jwt);
      if (jwt) {
        var decoded = await jwt_decode(jwt);
        console.log(decoded);
        setUser(decoded);
        setUserId(decoded._id);
        //console.log(decoded.username);

        //get all the places from the DB
        API.getPlaces()
          .then((res) => {
            console.log(res.data);
            console.log("user id " + userId + user._id);
            var placesWithId = res.data.filter(
              (x) => x.creatorId === decoded._id
            );
            setMyPlaces(placesWithId);
            console.log(placesWithId);
            setPlaces(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }

    functionName();
  }, [jwt]);

  return (
    <>
      <div className="body-wrapper">
        <div className="places-wrapper">
          <h1>My Skate Places</h1>
          {myPlaces.map((place) => (
            <div className="card-div-3">
              <MyPlacesCard
                image="https://via.placeholder.com/345x140.png"
                name={place.name}
                location={place.location}
                notes={place.notes}
                type={place.type}
                id={place._id}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ViewMyPlaces;
