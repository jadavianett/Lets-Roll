import "./Userdashboard.css";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { withRouter, Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

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

  // console.log("decoded data" + decoded);

  return (
    <>
      <div className="page-wrapper-with-nav">
        <div id="dash-wrapper">
          <h1>Welcome {user.username}!</h1>
          <br />
          <br />
          <p> What would you like to do?</p>
          <br />
          <div id="dash-links">
            <p>
              <Link to="/allplaces">
                <Button variant="contained" className="full-width">
                  VIEW ALL SKATE PLACES
                </Button>
              </Link>
            </p>
            <p>
              <Link to="/viewmyplaces">
                <Button variant="contained" className="full-width">
                  VIEW MY SKATE PLACES
                </Button>
              </Link>
            </p>
            <p>
              <Link to="/tutorials">
                <Button variant="contained" className="full-width">
                  VIEW TUTORIALS
                </Button>
              </Link>
            </p>
            <p>
              <Link to="/addnewplace">
                <Button variant="contained" className="full-width">
                  ADD NEW SKATE PLACE
                </Button>
              </Link>
            </p>
            <p>
              <Link to="/logout">
                <Button variant="contained" className="full-width">
                  LOG OUT
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
