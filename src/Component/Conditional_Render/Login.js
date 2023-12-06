import React from "react";
import SignInSide from "./SignInSide";
import SignUp from "./SignUp";
import Album from "./DashBoard";
function Login() {
  const Call = () => {
    const path = window.location.pathname;
    if (path === "/") {
      return <SignInSide />
    } else if (path === "/SignUp") {
      return <SignUp />
    }
    else if(path==="/Dashboard")
    {
        return <Album/>
    }
  };
  return <div>{Call()}</div>;
}

export default Login;
