import DatePicker from "../components/DatePicker";
import TextInput from "../components/TextInput";
import CheckboxesGroup from "../components/CheckboxesGroup";
import Button from "@material-ui/core/Button";

function Signup() {
  return (
    <div className="row">
      <div className="col s2"></div>
      <div className="col s8">
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
      </div>
      <div className="col s2"></div>
    </div>
  );
}

export default Signup;
