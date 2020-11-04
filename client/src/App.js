// import logo from "./logo.svg";
// import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to selenium</h1>
        </header>
      </div>
    </>
  );
}

export default App;
