import React from "react";
import "./Main.css"
import Staff from "../Staff/Staff";


const Main = (props) => {
    const mainContent = `main content`
    
    return (
        <>
            <div id="MainContainer">
                {props.mainState}
            </div>
        </>
    )
}

export default Main