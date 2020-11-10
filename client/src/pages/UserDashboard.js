import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { withRouter, Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

function UserDashboard () {
    const [user, setUser] = useState({})

const {jwt} = useContext(AuthContext);
useEffect(()=>{

if(jwt){
    var decoded = jwt_decode(jwt);
    console.log(decoded);
    setUser(decoded)
    console.log(decoded.username)
}

},[jwt])



// console.log("decoded data" + decoded);

    return (
        <Container>
            <h1>Welcome {user.username}!</h1>
            <p> What would you like to do?</p>
            <p><Link to = "/allplaces"><Button variant="contained">
                VIEW ALL SKATE PLACES 
            </Button></Link></p>
            <p><Link to = "/viewmyplaces"><Button variant="contained">
                VIEW MY SKATE PLACES
            </Button></Link></p>
            <p><Link to = "/tutorials"><Button variant="contained">
                VIEW TUTORIALS
            </Button></Link></p>
            </Container>
        
    )
}

export default UserDashboard;