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

function UserDashboard() {
  const [user, setUser] = useState({});

  const { jwt } = useContext(AuthContext);
  useEffect(() => {
    if (jwt) {
      var decoded = jwt_decode(jwt);
      console.log(decoded);
      setUser(decoded);
      console.log(decoded.username);
    }
  }, [jwt]);

  return (
    <>
      <div className="body-wrapper">
        <div className="content-wrapper">
          <h1>Welcome {user.username}!</h1>
          <br />
          <br />
          {/* <p> What would you like to do?</p> */}
          <br />
          <div id="dash-links">
            <p class="btm-margin">
              <Link to="/allplaces" className="no-link-style">
                <Button
                  variant="contained"
                  className="full-width no-link-style"
                >
                  <ExploreIcon /> &nbsp; VIEW ALL SKATE PLACES
                </Button>
              </Link>
            </p>
            <p class="btm-margin">
              <Link to="/tutorials" className="no-link-style">
                <Button
                  variant="contained"
                  className="full-width no-link-style"
                >
                  <VideoLibraryIcon /> &nbsp; VIEW TUTORIALS
                </Button>
              </Link>
            </p>
            <p class="btm-margin">
              <Link to="/addnewplace" className="no-link-style">
                <Button variant="contained" className="full-width">
                  <AddTwoToneIcon /> &nbsp; ADD NEW SKATE PLACE
                </Button>
              </Link>
            </p>{" "}
            <p class="btm-margin">
              <Link to="/myplaces" className="no-link-style">
                <Button variant="contained" className="full-width">
                  <ListIcon /> &nbsp; VIEW MY SKATE PLACES
                </Button>
              </Link>
            </p>
            <p>
              <Link to="/logout" className="no-link-style">
                <Button variant="contained" className="full-width">
                  <ExitToAppIcon /> &nbsp; LOG OUT
                </Button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
