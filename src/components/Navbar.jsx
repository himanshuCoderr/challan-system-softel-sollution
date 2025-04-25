import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  
  let [currentUserName, setCurrentUserName] = useState("")
  const navigate = useNavigate()
  async function getName() {
    let userName = await localStorage.getItem("fullName")
    if (userName?.length > 0) {
      setCurrentUserName(userName)
    } else {
      toast("Unable to fetch Name")
      navigate("/login")
    }
  }
  console.log("Done 1")
  useEffect(() => {
    console.log("Done 2")
    getName()

  }, [])

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* <Link to="/" className="logo"> */}
        Challan System
        {/* </Link> */}
      </div>
      {console.log("Done 3")}
      <div className="nav-links">
        {/* <Link to="/" className="nav-link"> */}
        <span className='nav-link'>
          Home
        </span>
        {/* </Link> */}
        {/* <Link to="/challans" className="nav-link"> */}
        <span className='nav-link'>
          Challans
        </span>
        {/* </Link> */}
        {/* <Link to="/reports" className="nav-link"> */}
        <span className='nav-link'>
          Reports
        </span>
        {/* </Link> */}
      </div>

      <div className="user-profile">
        <img/>
        <span className="user-name">{currentUserName}</span>
      </div>
    </nav>
  );
};

export default Navbar; 