import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
 import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { app } from "../Firebase";


function Registration() {

    const emailRef = useState()
    const passwordRef = useState()
    const NameRef = useState()

    const navigate = useNavigate()

   function create() {
    const email = emailRef.current.value
    const password = passwordRef.current.value
    const name = NameRef.current.value
     const auth = getAuth();
     createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
         // Signed in
         const user = userCredential.user;
         // ...
         navigate ("/Home")
         console.log("success")
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         // ..
       });
   }
  return (
    <div className="register">
        <div className="register1">
        </div>
      <div className="register2">
        <br />
        <FaTwitter className="bird"/>
        <br />
        <h1>Sign up to twitter</h1>
        <br />
        <input type="text" id="Name" ref={NameRef} placeholder="Enter full Name" />
        <br />
        <input type="email" id="Email" ref={emailRef} placeholder="Enter Email" />
        <br />
        <input type="password" id="password" ref={passwordRef} placeholder="Enter Password" />
        <br />
        <button id="login" onClick={create}>Create</button>
        <br />
      </div>
    </div>
  );
}

export default Registration;
