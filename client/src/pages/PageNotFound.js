import "./Pages.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <div className="body-wrapper">
        <h1>That is not a valid URL!</h1>
        <br />
        <br />
        <p>
          Would you like to <Link to="/allplaces">view all places?</Link>
        </p>
      </div>
    </>
  );
}

export default PageNotFound;
