import DatePicker from "../components/DatePicker";
import TextInput from "../components/TextInput";
import CheckboxesGroup from "../components/CheckboxesGroup";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

function Signup() {
  return (
    <>
      <Container>
        <h1>This is the signup page.</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("submitted");
          }}
        >
          <TextInput label="Enter a username" />
          <TextInput label="Enter a password" />
          <DatePicker label="When did you start skating?" />
          <CheckboxesGroup />
          <TextInput label="Your Location" />
          <Button type="submit" size="large" variant="contained">
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
}

export default Signup;
