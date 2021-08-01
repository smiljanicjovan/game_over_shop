import React from "react";
import "./signin.scss";

import NavBar from "../../components/NavBar/NavBar";
import SigninComponent from "../../components/Signin/SigninComponent";

export default function SignIn() {
  return (
    <div>
      <NavBar />
      <div className="signIN">
        <SigninComponent />
      </div>
    </div>
  );
}
