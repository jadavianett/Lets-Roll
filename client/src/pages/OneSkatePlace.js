import Paper from "../components/Paper";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { withRouter, Link } from "react-router-dom";
function OneSkatePlace() {
  return (
    <Container>
      <h1>This is one skate place page.</h1>
      <h1>Place Name</h1>
      <img
        src="https://via.placeholder.com/300x300.png"
        alt="placeholder"
      ></img>
      <h3>See what others have said about this place!</h3>
      <Paper />
      <Paper />
      <Paper />
      <p>
        <Link to="/allplaces">
          <Button variant="contained">VIEW ALL SKATE PLACES</Button>
        </Link>
      </p>
    </Container>
  );
}

export default OneSkatePlace;
