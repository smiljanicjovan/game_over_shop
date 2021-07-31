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
