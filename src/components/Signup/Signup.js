import React, { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

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
      return setError("password do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("failed");
    }
    setLoading(false);
  }

  return (
    <>
      <div className="card">
        <p>sign up</p>
        {loading ? "loading" : null}sss
        {error && error}
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" name="email" ref={emailRef} />
          </label>
          <label>
            Password:
            <input type="password" name="password" ref={passwordRef} />
          </label>
          <label>
            Password-Confirm:
            <input type="password" name="password" ref={passwordConfirmRef} />
          </label>
          <input type="submit" value="Sign Up" />
        </form>
      </div>
      <div className="acc">
        Already have aacc <Link to="/login">log in</Link>
      </div>
    </>
  );
}
