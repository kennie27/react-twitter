import React, { useState } from 'react'
import {FaTwitter} from "react-icons/fa"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router';
import { app } from '../Firebase';
import { Link } from 'react-router-dom';


function Login() {

  const emailRef = useState()
  const passwordRef = useState()

   const navigate = useNavigate()

  function signin() {

   const email = emailRef.current.value
   const password = passwordRef.current.value

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        navigate ("/Home")
        console.log("Successfully signed in")
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  return (
    <div className="login">
      <div className="login1">
        <div className="icon">
          <FaTwitter />
        </div>
        <br />
        <br />
        <br />

        <h1>Sign in to twitter</h1>
        <br />
        <input type="text" id="Email" ref={emailRef} placeholder="Enter Email" />
        <br />
        <input type="password" id="password" ref={passwordRef} placeholder="Enter Password" />
        <br />
        <button id="login" onClick={signin}>Login</button>
        <br />
        <p>
          Don't have an account? <Link to="/Registration">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login