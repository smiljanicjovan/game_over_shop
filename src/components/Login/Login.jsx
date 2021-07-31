import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

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
      setError("failed to sing in");
    }
    setLoading(false);
  }

  return (
    <>
      <div className="card">
        <p>log in</p>

        {loading ? "loading" : null}
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

          <input type="submit" value="Log in" />
        </form>
      </div>
      <div className="acc">
        Need an acc <Link to="/signup">Sign uP</Link>
      </div>
    </>
  );
}
