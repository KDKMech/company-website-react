import React from "react";
import "./NavBar.css";
import { useState } from 'react'
import { useEffect } from "react";

const Navbar = (props) => {
  // array of links?
        // make click events for each button. render corrasponding child components

    const [chosenPage, setChosenPage] = useState('Welcome to Our Company')

    const handleChoice = (event) => {
      setChosenPage(event.target.value)
    }
    useEffect(() => { props.addToMain(chosenPage); // Logs whenever chosenPage changes 
      }, [chosenPage]); // Dependency array ensures this runs only when chosenPage changes
    

    const buttons = [
        {page: "staff", content: "all the staff"},
        {page: "contact", content: "contact info"},
        {page: "history", content: "history of the company"},
    ]

  return (
    <>
      <div className="Navbar">
        {/* <button name="home">Home</button> */}
        {/* <button name="staff" onClick={handleChoice} value={'staff'}>Staff</button>
        <button name="history">History</button>
        <button name="pastWork">Past Work</button>
        <button name="contact">Contact Us</button> */}
        {buttons.map((banana, index) => {
          return (<button key={index} onClick={handleChoice} value={banana.content}>{banana.page}</button>) 
        })}
      </div>
    </>
  );
};
export default Navbar;
