import React, { useRef, useState } from "react";
import "./signupcomponent.scss";

import Loader from "react-loader-spinner";
import { useAuth } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import {
  SignupPasswordError,
  SignupError,
  ShortPassword,
} from "../Error/SignupError";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup, signInWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value.length < 6) {
      return setError(<ShortPassword />);
    }
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

  async function handleGoogle() {
    try {
      setError("");
      setLoading(true);
      await signInWithGoogle();
      history.push("/");
    } catch {
      setError(<SignupError />);
    }
    setLoading(false);
  }

  return (
    <>
      <div className="signup">
        <p className="signup-headline">Sign up</p>
        {!loading ? null : (
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        )}
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
              placeholder="Type your password"
            />
          </label>
          <label className="signup_form-group">
            Confirm Password:
            <input
              type="password"
              name="password"
              ref={passwordConfirmRef}
              className="signup_form-group-input"
              placeholder="Please confirm password"
            />
          </label>
          <input
            type="submit"
            value="Create account"
            className="signup_button"
          />
          or
          <div className="signup_link">
            Alreay have an Account?
            <Link to="/signin"> SignIn</Link>
          </div>
          <button className="signup_button google" onClick={handleGoogle}>
            Continue with Google
          </button>
        </form>
      </div>
    </>
  );
}
