import UserAppBar from "./UserAppBar";
import GuestAppBar from "./GuestAppBar";

import { useState, useContext, useEffect } from "react";

function AppBarDisplay({ isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <>
        <h1>User app bar</h1>
      </>
    );
  } else {
    return (
      <>
        <h1>Guest app bar</h1>
      </>
    );
  }
}

export default AppBarDisplay;
