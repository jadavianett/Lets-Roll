
import Input from "../components/Input";
import DatePicker from "../components/DatePicker";

function Signup () {
    return (
        <div>
           <h1> CREATE NEW USER</h1>
           <form>
               <Input label="Enter Username"/>
               <Input label="Enter Password Here"/>
               <DatePicker />

           </form>
        </div>
    )
}

export default Signup;