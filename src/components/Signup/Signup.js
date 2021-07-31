import React, { useRef, useState } from "react";
import "./signup.scss";

import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import { SignupPasswordError, SignupError } from "./SignupError";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError(<SignupPasswordError />);
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError(<SignupError />);
    }
    setLoading(false);
  }

  return (
    <>
      <div className="signup">
        <p className="login-headline">SignUp</p>
        {loading ? "loading" : null}
        {error && error}
        <form onSubmit={handleSubmit} className="signup_form">
          <label className="signup_form-group">
            Email:
            <input
              type="email"
              name="email"
              ref={emailRef}
              className="signup_form-group-input"
              placeholder="Type your email"
            />
          </label>

          <label className="signup_form-group">
            Password:
            <input
              type="password"
              name="password"
              ref={passwordRef}
              className="signup_form-group-input"
              placeholder="Type your password again"
            />
          </label>

          <label className="signup_form-group">
            Password-Confirm:
            <input
              type="password"
              name="password"
              ref={passwordConfirmRef}
              className="signup_form-group-input"
              placeholder="Type your password again"
            />
          </label>

          <input type="submit" value="Sign Up" className="login_button" />
        </form>
      </div>
    </>
  );
}
