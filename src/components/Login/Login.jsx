import React, { useRef, useState } from "react";
import "./login.scss";

import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import LoginError from "./LoginError";

export default function Login() {
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
      <div className="login">
        <p className="login-headline">Login</p>

        {loading ? "loading" : null}
        {error && error}
        <form onSubmit={handleSubmit} className="login_form">
          <label className="login_form-group">
            Email:
            <input
              type="email"
              name="email"
              ref={emailRef}
              className="login_form-group-input "
              placeholder="Type your email"
            />
          </label>

          <label className="login_form-group">
            Password:
            <input
              type="password"
              name="password"
              ref={passwordRef}
              className="login_form-group-input"
              placeholder="Type your password"
            />
          </label>

          <input type="submit" value="Login" className="login_button" />
        </form>
      </div>
    </>
  );
}