import UserAppBar from "./UserAppBar";
import GuestAppBar from "./GuestAppBar";

import { useState, useContext, useEffect } from "react";

function AppBarDisplay({ isLoggedIn }) {
  if (isLoggedIn) {
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
