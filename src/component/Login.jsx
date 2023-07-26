// Importing the necessary modules 
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import "../css/Login.css"
import logoImage from "../images/logo.png"
import eyeLogo from "../images/eye.png"; 

// Creating the class based component 
class Login extends Component {
    // Creating a state 
    state = {}

    // Handle on change password 
    onChange = (event) => {
        console.log(event); 
    }

    // Rendering the component 
    render() {
        // Returning the jsx component 
        return (
            <Fragment> 
                <section className="mainSection">
                    <div className="imageSection">
                        <div className="logoImageDiv">
                            <img src={logoImage} alt="" className="logoImage"/>
                        </div>
                    </div>
                    <div className="loginForm">
                        <div className="formDiv">

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
                                        <input onChange={this.onChange} type="password" className="password" placeholder='Enter Password' /> 
                                        <img src={eyeLogo} alt="" class="loginEyeImage"/>
                                    </div>
                                    
                                </div>

                                <div className="loginBtnDiv">
                                    <button className="loginBtn"> Login </button>
                                </div>

                            </div>

                         

                        </div>


                    </div>
                    <div className="formSection"></div>
                </section>

            </Fragment>
        )
    }
}

// Exporting the login component 
export default Login; 