// Importing the necessary modules 
import React, { Component, Fragment } from 'react'
import "../css/Login.css"
import eyeLogo from "../images/eye.png"; 
import ImageDiv from './ImageDiv.jsx';
import FormDiv from './SignInFormDiv';

// Creating the class based component 
class Login extends Component {

    // Rendering the component 
    render() {
        // Checking the the background color is white or black 
        if (this.props.state === "black") {
            // Returning the jsx component 
            return (
                <Fragment> 
                    <section >
                        <section className="mainSection">
                            <ImageDiv 
                                style={{ backgroundColor: "black"}} 
                                changeBackgroundColor={this.props.changeBackgroundColor}
                                buttonText={this.props.buttonText}
                            /> 

                        <div className="loginForm" style={{ backgroundColor: "black"}}>
                        
                            <FormDiv style={{ backgroundColor: "black"}} state={this.props.state}/>    
                           
                        </div>
                        <div className="formSection"></div>
                    </section>


                    </section>
                    
                </Fragment>
            )
        }

        else {
            return(
                <Fragment> 
                <section >
                    <section className="mainSection">
                        <ImageDiv 
                            changeBackgroundColor={this.props.changeBackgroundColor}
                            buttonText={this.props.buttonText}
                        /> 

                        <div className="loginForm">
                            <FormDiv>    
                            </FormDiv> 
                        </div>
                    <div className="formSection"></div>
                </section>


                </section>
                
                </Fragment>
            )
        }

    }
}

// Exporting the login component 
export default Login; 