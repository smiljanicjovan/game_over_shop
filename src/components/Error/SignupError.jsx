import React from "react";
import "./signuperror.scss";

export function SignupPasswordError() {
  return <div className="passworderror">Passwords do not match</div>;
}

export function SignupError() {
  return (
    <div className="passworderror">
      Already Have an Account? Please try to Loggin
    </div>
  );
}

export function ShortPassword() {
  return (
    <div className="passworderror">
      Password is too short. Please Enter at least 6 simbols.
    </div>
  );
}
