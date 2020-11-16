import React from "react";
import "./Pages.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useContext, useEffect } from "react";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExploreIcon from "@material-ui/icons/Explore";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

//Log out page displays naviagation to available pages and clears jwt for session 
const Logout = () => {
  // grabbing setJwt function from context 
  const { setJwt } = useContext(AuthContext);

  // on load gets jwt from session storage to setJwt as nothing for logged out user 
  useEffect(() => {
    const sessionJwt = sessionStorage.getItem("jwt");
    if (sessionJwt) {
      sessionStorage.setItem("jwt", "");
      setJwt("");
    }
  }, []);

  return (
    <>
      <div className="body-wrapper">
        <div className="content-wrapper">
          <h1 className="animated-title">You have successfully logged out!</h1>
          <br />
          <p>You may still:</p>
          <br />
          <div id="dash-links">
            <p className="btm-margin">
              <Link to="/allplaces" className="no-link-style">
                <Button variant="contained" className="full-width">
                  <ExploreIcon /> &nbsp; VIEW ALL SKATE PLACES
                </Button>
              </Link>
            </p>

            <p className="btm-margin">
              <Link to="/tutorials" className="no-link-style">
                <Button variant="contained" className="full-width">
                  <VideoLibraryIcon />
                  &nbsp; VIEW TUTORIALS
                </Button>
              </Link>
            </p>

            <p>
              <Link to="/login" className="no-link-style">
                <Button variant="contained" className="full-width">
                  <VpnKeyIcon /> &nbsp; LOG BACK IN
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
