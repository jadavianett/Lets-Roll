import UserAppBar from "./UserAppBar";
import GuestAppBar from "./GuestAppBar";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";

function AppBarDisplay() {
  const { jwt } = useContext(AuthContext);

  if (jwt) {
    return (
      <>
        <UserAppBar />
      </>
    );
  } else {
    return (
      <>
        <GuestAppBar />
      </>
    );
  }
}

export default AppBarDisplay;
