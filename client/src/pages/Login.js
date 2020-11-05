import TextInput from "../components/TextInput";

import Button from "../components/Buttons";

function Login() {
  return (
    <div>
      <div className> </div>
      <h1>LETS ROLL</h1>

      <h4> JOIN THE SK8 COMMUNITY</h4>

      <TextInput label="ENTER USERNAME HERE"/> 
      <TextInput label="ENTER PASSWORD HERE"/> 

      <Button text="LOG IN" />

      <h4> DONT HAVE AN ACCOUNT? SIGN UP HERE</h4>

      <Button text="VIEW SKATE PLACES WITHOUT SIGNING IN" />



    </div>
  );
}

export default Login;
