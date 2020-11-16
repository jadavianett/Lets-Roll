import "./Pages.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import AddTwoToneIcon from "@material-ui/icons/AddTwoTone";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExploreIcon from "@material-ui/icons/Explore";
import ListIcon from "@material-ui/icons/List";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

// Displays Welcome for logged in user and navigation to other pages 
function UserDashboard() {
  //User state 
  const [user, setUser] = useState({});

  // declares jwt from Auth Context
  const { jwt } = useContext(AuthContext);

  // grabs User jwt on load of page and sets it for the user information 
  useEffect(() => {
    if (jwt) {
      //decodes user information 
      var decoded = jwt_decode(jwt);
      setUser(decoded);
    }
  }, [jwt]);

  return (
    <>
      <div className="body-wrapper">
        <div className="content-wrapper">
          <h1 className="animated-title">User Dashboard</h1>
          <br />
          <h2>You are logged in as {user.username}</h2>
          <br />
          <br />

          <div className="dash-links">
            <Link to="/allplaces" className="no-link-style">
              <Button variant="contained" className="set-width no-link-style">
                <ExploreIcon /> &nbsp; VIEW ALL SKATE PLACES
              </Button>
            </Link>

            <Link to="/tutorials" className="no-link-style">
              <Button variant="contained" className="set-width no-link-style">
                <VideoLibraryIcon /> &nbsp; VIEW TUTORIALS
              </Button>
            </Link>

            <Link to="/addnewplace" className="no-link-style">
              <Button variant="contained" className="set-width">
                <AddTwoToneIcon /> &nbsp; ADD NEW SKATE PLACE
              </Button>
            </Link>

            <Link to="/myplaces" className="no-link-style">
              <Button variant="contained" className="set-width">
                <ListIcon /> &nbsp; VIEW MY SKATE PLACES
              </Button>
            </Link>

            <Link to="/logout" className="no-link-style">
              <Button variant="contained" className="set-width">
                <ExitToAppIcon /> &nbsp; LOG OUT
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
