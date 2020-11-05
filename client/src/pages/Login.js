import TextInput from "../components/TextInput";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import { withRouter, Link } from "react-router-dom";

function Login() {
  return (
    <Container>
      <div className> </div>
      <h1>LETS ROLL</h1>

      <h4> JOIN THE SK8 COMMUNITY</h4>

      <TextInput label="ENTER USERNAME HERE"/> 
      <TextInput label="ENTER PASSWORD HERE"/> 

      <Button variant="contained">LOG IN</Button>

    <Link to = "/signup"><h4>DON'T HAVE AN ACCOUNT? SIGN UP HERE</h4></Link>

      <Link to = "/allplaces"><Button variant="contained">
                VIEW SKATE PLACES WITHOUT LOGGING IN
            </Button></Link>



            </Container>
  );
}

export default Login;
