// Importing the necessary modules 
import React, { Component, Fragment } from "react"; 
import blackLogo from "../images/switchToBlack.jpg"; 
import whiteLogo from "../images/switchTowhite.jpg"; 
import "../css/button.css"; 

// Creating a functional component 
let SwitchButton = (props) => {
 
    return (
        <Fragment> 
            <div className="switchButton">
                <button className="switchImage" onClick={props.changeBackgroundColor}> {props.buttonText} </button>
            </div>
        </Fragment>
    )
}


// Exporting the button 
export default SwitchButton; 