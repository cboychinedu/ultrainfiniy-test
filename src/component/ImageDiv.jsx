// Importing the necessary module 
import React, { Component, Fragment } from 'react'
import logoImage from "../images/logo.png"; 
import SwitchButton from './ChangeBackgroundImageBtn';

// Creating the functional component 
let ImageDiv = (props) => {
    // Rendering the image 
    return (
        <Fragment> 
            <div className="imageSection">
                <div className="logoImageDiv">
                    <img src={logoImage} alt="" className="logoImage"/>
                    <SwitchButton changeBackgroundColor={props.changeBackgroundColor} buttonText={props.buttonText}/> 
                </div>
                

            </div>
        </Fragment>
    )
}

// Exporting the image div 
export default ImageDiv; 

