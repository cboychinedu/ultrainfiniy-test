// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import eyeLogo from "../images/eye.png"; 

// Creating functional component 
class FormDiv extends Component {

    render() {
        // Checking the color 
        if (this.props.state === "black") {
            return (
                <Fragment>
                    <div className="formDivBlack" >
                        <div className="containerLogin">
                            <div className="displayHeadersPara">
                                <h2 className="loginHeader"> Login </h2> <br />
                                <p className="loginPara"> 
                                    Welcome Back, Enter your details. 
                                </p>
                            </div>
                            <div className='inputDiv'>
                                <label htmlFor="" className="label emailLabel"> Email </label> <br /> 
                                    <input className="email" placeholder='Enter your Email address' /> 
                            </div>
                            <div className='inputDiv'>
                                <label htmlFor='' className="label passwordLabel"> Password </label> <br /> 
                                <div>
                                    <input type="password" className="password" placeholder='Enter Password' /> 
                                    <img src={eyeLogo} alt="" class="loginEyeImage"/>
                                </div> 
                            </div>
                            <div className="loginBtnDiv">
                                <button className="loginBtn"> Login </button>
                            </div>
                        </div>
                    </div>

                </Fragment>
            )
        }

        // Else 
        else {
            return (
                <Fragment> 
                    <div className="formDiv" >
                        <div className="containerLogin">
                            <div className="displayHeadersPara">
                                <h2 className="loginHeader"> Login </h2> <br />
                                <p className="loginPara"> 
                                    Welcome Back, Enter your details. 
                                </p>
                            </div>
                            <div className='inputDiv'>
                                <label htmlFor="" className="label emailLabel"> Email </label> <br /> 
                                    <input className="email" placeholder='Enter your Email address' /> 
                            </div>
                            <div className='inputDiv'>
                                <label htmlFor='' className="label passwordLabel"> Password </label> <br /> 
                                <div>
                                    <input type="password" className="password" placeholder='Enter Password' /> 
                                    <img src={eyeLogo} alt="" class="loginEyeImage"/>
                                </div> 
                            </div>
                            <div className="loginBtnDiv">
                                <button className="loginBtn"> Login </button>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        }
    
    }
    
}

// Exporting the form div 
export default FormDiv; 