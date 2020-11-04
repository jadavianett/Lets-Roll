import { BrowserRouter as Router, Route } from "react-router-dom";
import AddNewPlace from './pages/AddNewPlace';
import AllPlaces from './pages/AllPlaces';
import Login from './pages/Login';
import OneSkatePlace from './pages/OneSkatePlace';
import Signup from './pages/Signup';
import Tutorials from './pages/Tutorials';
import UserDashboard from './pages/UserDashboard';
import ViewMyPlaces from './pages/ViewMyPlaces';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
       <h1> Hi </h1>
      </header>
      <Route exact path ="/" component ={Login}/>
      <Route exact path="/addnewplace" component ={AddNewPlace}/>
      <Route exact path ="/allplaces" component={AllPlaces}/>
      <Route exact path ="/oneskateplace" component={OneSkatePlace}/>
      <Route exact path ="/signup" component={Signup}/>
      <Route exact path = "/tutorials" component={Tutorials}/>
      <Route exact path = "/userdashboard" component={UserDashboard}/>
      <Route exact path = "/viewmyplaces" component={ViewMyPlaces}/>

    </div>
    </Router>
  );
}

export default App;
