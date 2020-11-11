import React from "react";
import "./Logout.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useState, useContext, useEffect } from "react";

const Logout = () => {
  const { jwt, setJwt } = useContext(AuthContext);

  useEffect(() => {
    const sessionJwt = sessionStorage.getItem("jwt");
    if (sessionJwt) {
      sessionStorage.setItem("jwt", "");
      setJwt("");
    }
  }, []);

  return (
    <>
      <div className="page-wrapper-with-nav">
        <div id="logout-wrapper">
          <h1>You have successfully logged out.</h1>
          <br />
          <p>You may still:</p>
          <br />
          <div id="dash-links">
            <p class="btm-margin">
              <Link to="/allplaces">
                <Button variant="contained" className="full-width">
                  VIEW ALL SKATE PLACES
                </Button>
              </Link>
            </p>

            <p class="btm-margin">
              <Link to="/tutorials">
                <Button variant="contained" className="full-width">
                  VIEW TUTORIALS
                </Button>
              </Link>
            </p>

            <p>
              <Link to="/login">
                <Button variant="contained" className="full-width">
                  LOG BACK IN
                </Button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logout;
