//Importing needed styling, npm/react packages, components and pages for the FrontEnd to run 
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import AddNewPlace from "./pages/AddNewPlace";
import AllPlaces from "./pages/AllPlaces";
import Login from "./pages/Login";
import OneSkatePlace from "./pages/OneSkatePlace";
import Signup from "./pages/Signup";
import Tutorials from "./pages/Tutorials";
import UserDashboard from "./pages/UserDashboard";
import MyPlaces from "./pages/MyPlaces";
import PageNotFound from "./pages/PageNotFound";
import Logout from "./pages/Logout";
import EditPlace from "./pages/EditPlace";
import AppBarDisplay from "./components/AppBar/AppBarDisplay";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AuthContext from "./context/AuthContext";

import { setAxiosDefaults } from "./Utils/axiosDefaults";

function App() {
  // jwt State to be used to pass user token to each page through the session
  const [jwt, setJwt] = useState(sessionStorage.getItem("jwt")|| "");

  // Get user token on load and setting if presence in session storage and setting the jwt state
  useEffect(() => {
    const sessionJwt = sessionStorage.getItem("jwt");
    if (sessionJwt) {
      setJwt(sessionJwt);      
    }
  }, []);

  // get stored user jwt on load if not found in session storage and setting the jwt state 
  useEffect(() => {    
    if (jwt) {
      setAxiosDefaults(jwt);
      localStorage.setItem("jwt", jwt);
    }
  }, [jwt]);

  return (
  
    // React Router to route the html views 
    //Global Auth Context to pass jwt
      <Router>
      
        <AuthContext.Provider value={{ jwt, setJwt }}>
        <div className="App">
          <AppBarDisplay />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <ProtectedRoute exact path="/addnewplace" component={AddNewPlace} />
            <Route exact path="/allplaces" component={AllPlaces} />
            <Route exact path="/oneskateplace/:id" component={OneSkatePlace} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/tutorials" component={Tutorials} />
            <ProtectedRoute
              exact
              path="/userdashboard"
              component={UserDashboard}
            />
            <ProtectedRoute exact path="/myplaces" component={MyPlaces} />
            <ProtectedRoute exact path="/editplace/:id" component={EditPlace} />
            <Route path="/*" component={PageNotFound} />
          </Switch>
        </div>
        </AuthContext.Provider>
      </Router>
    
  );
}

export default App;
