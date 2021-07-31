import React from "react";
import "./signinandlogin.scss";

import NavBar from "../../components/NavBar/NavBar";
import Signup from "../../components/Signup/Signup";
import Login from "../../components/Login/Login";

export default function SigninAndLogin() {
  return (
    <>
      <NavBar />
      <div className="forms">
        <Login />
        <Signup />
      </div>
    </>
  );
}
