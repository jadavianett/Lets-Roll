import UserAppBar from "./UserAppBar";
import GuestAppBar from "./GuestAppBar";

import { useState, useContext, useEffect } from "react";

function AppBarDisplay(props) {
  if (props.isLoggedIn) {
    return (
      <>
        <UserAppBar props={props} />
      </>
    );
  } else {
    return (
      <>
        <GuestAppBar props={props} />
      </>
    );
  }
}

export default AppBarDisplay;
