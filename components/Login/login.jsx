"use client";

import { useState } from "react";

export default function Login() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [didEditEmail, setDidEditEmail] = useState(false);
  const [didEditPassword, setDidEditPassword] = useState(false);
  const [EmailInvalid, setEmailInvalid] = useState(false);
  const [PasswordInvalid, setPasswordInvalid] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    // console.log("Email:" + enteredEmail);
    // console.log("Password:" + enteredPassword);
    setEnteredEmail("");
    setEnteredPassword("");

    const emailIsValid = enteredEmail.includes("@");
    const passwordIsValid = enteredPassword.length >= 6;

    if (!emailIsValid) {
      setEmailInvalid(true);
      return;
    }

    if (!passwordIsValid) {
      setPasswordInvalid(true);
      return;
    }
  }

  function handleEmailChange(e) {
    setEnteredEmail(e.target.value);
    setDidEditEmail(false);
  }

  function handlePasswordChange(e) {
    setEnteredPassword(e.target.value);
    setDidEditPassword(false);
  }

  function handleEmailBlur() {
    setDidEditEmail(true);
  }

  function handlePasswordBlur() {
    setDidEditPassword(true);
  }

  const EmailIsInvalid = didEditEmail && !enteredEmail.includes("@");
  const PasswordIsInvalid = didEditPassword && enteredPassword.length < 6;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={handleEmailBlur}
            onChange={handleEmailChange}
            value={enteredEmail}
          />
          <div className="control-error">
            {EmailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={handlePasswordBlur}
            onChange={handlePasswordChange}
            value={enteredPassword}
          />
          <div className="control-error">
            {PasswordIsInvalid && (
              <p>Password must be at least 6 characters long.</p>
            )}
          </div>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
