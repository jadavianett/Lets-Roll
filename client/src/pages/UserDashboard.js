import "./Pages.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExploreIcon from '@material-ui/icons/Explore';
import ListIcon from '@material-ui/icons/List';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
              <Link to="/allplaces">
                <Button variant="contained" className="full-width">
                  VIEW ALL SKATE PLACES <ExploreIcon/>
                </Button>
              </Link>
            </p>
            <p class="btm-margin">
              <Link to="/tutorials">
                <Button variant="contained" className="full-width">
                  VIEW TUTORIALS <VideoLibraryIcon/>
                </Button>
              </Link>
            </p>
            <p class="btm-margin">
              <Link to="/addnewplace">
                <Button variant="contained" className="full-width">
                  ADD NEW SKATE PLACE <AddTwoToneIcon/>
                </Button>
              </Link>
            </p>{" "}
            <p class="btm-margin">
              <Link to="/viewmyplaces">
                <Button variant="contained" className="full-width">
                  VIEW MY SKATE PLACES <ListIcon />
                </Button>
              </Link>
            </p>
            <p>
              <Link to="/logout">
                <Button variant="contained" className="full-width">
                  LOG OUT <ExitToAppIcon/>
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
