import React from "react";
import "./NavBar.css";

const Navbar = (props) => {
  // array of links?
        // make click events for each button. render corrasponding child components
    const buttons = [
        {page: "staff",
        
        }
    ]

  return (
    <>
      <div className="Navbar">
        {/* <button name="home">Home</button> */}
        <button name="staff">Staff</button>
        <button name="history">History</button>
        <button name="pastWork">Past Work</button>
        <button name="contact">Contact Us</button>
      </div>
    </>
  );
};
export default Navbar;
