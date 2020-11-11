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
import AppBar from "./components/AppBar";
import EditPlace from "./pages/EditPlace";
import AuthContext from "./context/AuthContext";
import { useState } from "react";

function App() {
  const [jwt, setJwt] = useState("");
  let isLoggedIn;

  if (jwt != "") {
    isLoggedIn = true;
  } else {
    isLoggedIn = false;
  }

  // console.log(isLoggedIn);

  return (
    <AuthContext.Provider value={{ jwt, setJwt }}>
      <Router>
        <div className="App">
          <AppBar isLoggedIn={isLoggedIn} />
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/addnewplace" component={AddNewPlace} />
          <Route exact path="/allplaces" component={AllPlaces} />
          <Route exact path="/oneskateplace/:id" component={OneSkatePlace} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/tutorials" component={Tutorials} />
          <Route exact path="/userdashboard" component={UserDashboard} />
          <Route exact path="/viewmyplaces" component={ViewMyPlaces} />
          <Route exact path="/editplace/:id" component={EditPlace} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
