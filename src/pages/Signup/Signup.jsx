import React from "react";
import "./signup.scss";

import NavBar from "../../components/NavBar/NavBar";
import SignupComponent from "../../components/Signup/SignupComponent";

export default function SignUp() {
  return (
    <>
      <NavBar />
      <div className="signUP">
        <SignupComponent />
      </div>
    </>
  );
}
