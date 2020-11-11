import React from 'react';
import AuthContext from "../context/AuthContext";
import {useState, useContext, useEffect } from "react";

const Logout = () => {

    const { jwt, setJwt } = useContext(AuthContext);

    useEffect(()=>{
        const sessionJwt = sessionStorage.getItem("jwt");
        if(sessionJwt)
        {
            sessionStorage.setItem("jwt", "");
            setJwt("");
          
        }
        
    
      },[]);
    
    return (
        <div>
            <h4>Successfully logout!!</h4>
        </div>
    );
};

export default Logout;