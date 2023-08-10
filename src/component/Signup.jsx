// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import { Link } from 'react-router-dom'; 
import '../css/Signup.css'; 
import ImageDiv from './ImageDiv';
import SignUpFormDiv from './SignUpFormDiv';

// Creating the class based component 
class Signup extends Component {

    // Rendering the component 
    render() {
        // Checking if the background color is white or black 
        if (this.props.state === "black") {
            // Returning the jsx component 
            return (
                <Fragment> 
                    <section className="mainSection">
                        {/* Adding the image div */}
                        <ImageDiv 
                            style={{ backgroundColor: "black"}} 
                            changeBackgroundColor={this.props.changeBackgroundColor}
                            buttonText={this.props.buttonText}
                        /> 

                        {/* Adding the signup div */}
                        <SignUpFormDiv style={{ backgroundColor: "black" }} state={this.props.state}/> 

                       
                    </section>
                </Fragment>
            )
        }

        else {
            // Returning the jsx component 
            return (
                <Fragment> 
                    <section className="mainSection">
                        <ImageDiv 
                            style={{ backgroundColor: "black"}} 
                            changeBackgroundColor={this.props.changeBackgroundColor}
                            buttonText={this.props.buttonText}
                        /> 

                         {/* Adding the signup div */}
                         <SignUpFormDiv style={{ backgroundColor: "black" }} state={this.props.state}/> 

                       
                    </section>
                </Fragment>
            )
        }
        
    }
}

// Exporting the Signup component 
export default Signup; 