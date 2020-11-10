import Paper from "../components/Paper";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { useEffect} from "react";
import { withRouter, Link, useParams } from "react-router-dom";
import API from "../Utils/API";

function OneSkatePlace() {
  const { id } = useParams();
  
  useEffect(() => {
    //code Here
    API.getPlace(id)
      .then((res) => {
        console.log("one skate place" + res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, [id]);

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
