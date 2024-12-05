import React from "react";
import "./Main.css";
import Staff from "../Staff/Staff";
import History from "../History/History";
import Home from "../Home/Home";
import ContactUs from "../ContactUs/ContactUs";

const Main = (props) => {
  const mainContent = `main content`;

  const currentPage = props.mainState;

  const renderPage = () => {
    if (currentPage === `Staff`) {
      return <Staff />;
    } else if (currentPage === `History`) {
      return <History />;
    } else if (currentPage === `Contact`) {
      return <ContactUs />;
    }
  };

  return (
    <>
      <div id="MainContainer">
        {/* <Staff/> */}
        {renderPage()}
      </div>
    </>
  );
};

export default Main;
