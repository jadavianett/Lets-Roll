import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import AppBarDisplay from "./components/AppBarDisplay";
import EditPlace from "./pages/EditPlace";
import AuthContext from "./context/AuthContext";
import { useState, useEffect } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import { setAxiosDefaults } from "./Utils/axiosDefaults";

function App() {
  const [jwt, setJwt] = useState("");

  useEffect(() => {
    const sessionJwt = sessionStorage.getItem("jwt");
    if (sessionJwt) {
      setJwt(sessionJwt);
    }
  }, []);

  useEffect(() => {
    if (jwt) {
      setAxiosDefaults(jwt);
      localStorage.setItem("jwt", jwt);
    }
  }, [jwt]);

  return (
    <AuthContext.Provider value={{ jwt, setJwt }}>
      <Router>
        <div className="App">
          <AppBarDisplay />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <ProtectedRoute exact path="/addnewplace" component={AddNewPlace} />
            <Route exact path="/allplaces" component={AllPlaces} />
            <Route
              exact
              path="/oneskateplace/:id"
              component={OneSkatePlace}
            />
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
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
