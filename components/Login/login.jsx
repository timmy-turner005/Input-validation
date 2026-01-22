"use client";

import { useState } from "react";
// import Modal from "../UI/Modal";

export default function Login() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [didEditEmail, setDidEditEmail] = useState(false);
  const [didEditPassword, setDidEditPassword] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  //   const [isDeleting, setIsDeleting] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    console.log("Email:" + enteredEmail);
    console.log("Password:" + enteredPassword);

    const emailIsValid = didEditEmail && enteredEmail.includes("@");
    const passwordIsValid = didEditPassword && enteredPassword.length >= 6;

    if (!emailIsValid) {
      setEmailInvalid(true);
      return;
    }

    setEmailInvalid(false);

    if (!passwordIsValid) {
      setPasswordInvalid(true);
      return;
    }

    setPasswordInvalid(false);

    // setEnteredEmail("");
    // setEnteredPassword("");
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

  //   function handleStartDelete() {
  //     setIsDeleting(true);
  //   }

  //   function handleCancelDelete() {
  //     setIsDeleting(false);
  //   }

  // const emailInvalid = didEditEmail && !enteredEmail.includes("@");
  // const passwordInvalid = didEditPassword && enteredPassword.length < 6;

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
        <button className="button button-flat" type="reset">
          Reset
        </button>
        <button className="button">Login</button>
        {/* <button className="button">delete</button> */}
      </p>
      {/* {isDeleting && (
        <Modal onClose={handleCancelDelete} >
          <h2>Are you sure?</h2>
          <p>
            Do you really want to delete your account? This action cannot be
            undone.
          </p>
          <div className="form-actions">
            <button className="button button-flat" onClick={handleCancelDelete}>
              Cancel
            </button>
            <button
              className="button button-danger"
              onClick={handleStartDelete}
            >
              Delete
            </button>
          </div>
        </Modal>
      )} */}
    </form>
  );
}
