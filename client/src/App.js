import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import AddNewPlace from "./pages/AddNewPlace";
import AllPlaces from "./pages/AllPlaces";
import Login from "./pages/Login";
import OneSkatePlace from "./pages/OneSkatePlace";
import Signup from "./pages/Signup";
import Tutorials from "./pages/Tutorials";
import UserDashboard from "./pages/UserDashboard";
import ViewMyPlaces from "./pages/ViewMyPlaces";
import Logout from "./pages/Logout";
import AppBarDisplay from "./components/AppBarDisplay";
import UserAppBar from "./components/UserAppBar";
import GuestAppBar from "./components/GuestAppBar";
import EditPlace from "./pages/EditPlace";
import AuthContext from "./context/AuthContext";
import { useState, useContext, useEffect } from "react";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  const [jwt, setJwt] = useState("");
  let isLoggedIn;

  if (jwt != "") {
    isLoggedIn = true;
  } else {
    isLoggedIn = false;
  }

  // console.log(isLoggedIn);

  useEffect(() => {
    const sessionJwt = sessionStorage.getItem("jwt");
    if (sessionJwt) {
      setJwt(sessionJwt);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ jwt, setJwt }}>
      <Router>
        <div className="App">
          <AppBarDisplay isLoggedIn={isLoggedIn} />
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />          
          <ProtectedRoute exact path="/addnewplace" component={AddNewPlace}/>
          <Route exact path="/allplaces" component={AllPlaces} />
          <ProtectedRoute exact path="/oneskateplace/:id" component={OneSkatePlace} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/tutorials" component={Tutorials} />
          <ProtectedRoute exact path="/userdashboard" component={UserDashboard} />
          <ProtectedRoute exact path="/viewmyplaces" component={ViewMyPlaces} />
          <ProtectedRoute exact path="/editplace/:id" component={EditPlace} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
