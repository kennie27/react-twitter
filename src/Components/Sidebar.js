import React from 'react'
import { FaBell, FaEllipsisH, FaEnvelope, FaHome, FaSearch, FaTwitter, FaUser, } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import{ getAuth, signOut} from "firebase/auth"
import { useNavigate } from 'react-router-dom'

function Sidebar() {
  const navigate = useNavigate()
  function signout() {
  const auth = getAuth();

  signOut(auth)
    .then(() => {
      // Sign-out successful.
      navigate("/")
    })
    .catch((error) => {
      // An error happened.
    });
}
  return (
    <div className="sidebar">
      <Link to="/Home">
        {" "}
        <FaTwitter id="icon" />{" "}
      </Link>
      <Link to="/Home">
        {" "}
        <FaHome className="icon" /> Home
      </Link>
      <Link to="/Explore">
        {" "}
        <FaSearch className="icon" /> Explore
      </Link>
      <Link to="Notification">
        <FaBell className="icon" /> Notification
      </Link>
      <Link to="/Messages">
        {" "}
        <FaEnvelope className="icon" /> Messages
      </Link>
      <Link to="/Profile">
        {" "}
        <FaUser className="icon" /> Profile
      </Link>
      <Link to="/More">
        {" "}
        <FaEllipsisH className="icon" /> More
      </Link>
      <button id='Tweet'>Tweet</button>
      <p id="id" onClick={signout}>Sign out</p>
      </div>
  );
}

export default Sidebar