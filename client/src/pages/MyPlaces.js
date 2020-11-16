// import "./ViewMyPlaces.css";
import "./Pages.css";
import MyPlacesCard from "../components/Cards/MyPlacesCard";
import AuthContext from "../context/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import API from "../Utils/API";

function MyPlaces() {
  const [myPlaces, setMyPlaces] = useState([]);
  const { jwt } = useContext(AuthContext);

  useEffect(() => {
    async function functionName() {
      if (jwt) {
        var decoded = await jwt_decode(jwt);

        API.getPlaces()
          .then((res) => {
            var placesWithId = res.data.filter(
              (x) => x.creatorId === decoded._id
            );
            setMyPlaces(placesWithId);
          })
          .catch((err) => {
            throw(err)
          });
      }
    }

    functionName();
  }, [jwt]);

  return (
    <>
      <div className="places-wrapper">
        <h1>My Skate Places</h1>
        {myPlaces.length > 0 ? (
          myPlaces.map((place) => (
            <div className="card-div-1">
              <MyPlacesCard
                image="https://images.pexels.com/photos/2005992/pexels-photo-2005992.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                name={place.name}
                location={place.location}
                notes={place.notes}
                type={place.type}
                id={place._id}
              />
            </div>
          ))
        ) : (
          <>
            <br />
            <br />
            <br />

            <p>You have not yet created any skate places.</p>

            <br />
            <Link to="/addnewplace" className="no-link-style">
              <Button
                className="no-link-style"
                type="submit"
                size="large"
                variant="contained"
                id="create-a-place"
              >
                Add New Skate Place
              </Button>
            </Link>
          </>
        )}
      </div>
    </>
  );
}

export default MyPlaces;
