import React, { useRef, useState } from "react";
import "./signincomponent.scss";

import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import LoginError from "../Error/LoginError";

export default function Signin() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError(<LoginError />);
    }
    setLoading(false);
  }

  return (
    <>
      <div className="signin">
        <p className="signin-headline">Sign In</p>

        {loading ? "loading" : null}
        {error && error}
        <form onSubmit={handleSubmit} className="signin_form">
          <label className="signin_form-group">
            Email:
            <input
              type="email"
              name="email"
              ref={emailRef}
              className="signin_form-group-input "
              placeholder="Type your email"
            />
          </label>

          <label className="signin_form-group">
            Password:
            <input
              type="password"
              name="password"
              ref={passwordRef}
              className="signin_form-group-input"
              placeholder="Type your password"
            />
          </label>

          <input type="submit" value="Sing in" className="signin_button" />
          <div className="signin_link">
            Don't have an Account?
            <Link to="/signup"> SignUp</Link>
          </div>
        </form>
      </div>
    </>
  );
}
