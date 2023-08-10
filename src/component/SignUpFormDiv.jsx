// Importing the necessary modules 
import React, { Component, Fragment } from 'react';
import logoImage from "../images/logo.png"
import eyeLogo from "../images/eye.png";

// Creating the class based component 
class SignUpFormDiv extends Component {
    // Rendering 
    render() {
        // Checking the color 
        if (this.props.state === 'black') {
            return(
                <Fragment> 
                     <div className="signFormBlack">
                            <div className="formDivBlack">
                                <div className="container">
                                    <div className="displayHeadersPara">
                                        <h2 className="signUpHeader">  Sign up </h2> <br />

                                        <p className="signUpPara"> 
                                            Register with the right details to start using the platform 
                                        </p>
                                    </div>
                                    <div className="fullNameDiv">
                                        <label htmlFor="" className='label'> Full Name </label> < br/> 
                                        <input type="text" placeholder='Enter your Full Name' className="fullname"/>

                                    </div>

                                    <div className='emailDiv'>
                                        <label htmlFor="" className='label'> Email </label> <br/> 
                                        <input type="text" placeholder='Enter your Email address' className='email'/>

                                    </div>

                                    <div className="passwordDiv">
                                        <label htmlFor="" className='label'> Password </label> <br /> 
                                        <div>
                                            <input type="password" placeholder='Enter Password' className="password" />
                                            <img src={eyeLogo} alt="" srcset="" className="signUpImageEyeImage"/>
                                        </div>
                                    

                                    </div>

                                    <div className="radioBtnDiv">
                                        <div className="checkboxDiv">
                                            <input type="checkbox" name="" id="" />
                                            <label className="checkboxPara label"> User Numbers </label> <br />
                                        </div>

                                        <div className="checkboxDiv">
                                            <input type="checkbox" name="" id="" />
                                            <label className="checkboxPara label"> User Capital Letters </label> <br /> 
                                        </div>

                                        <div className="checkboxDiv">
                                            <input type="checkbox" name="" id="" />
                                            <label className="checkboxPara label"> Use Small Letters </label> <br />
                                        </div>

                                        <div className='checkboxDiv'>
                                            <input type="checkbox" name="" id="" />
                                            <label className="checkboxPara label"> Use Special Characters e.g @#![-%*& </label> <br />
                                        </div>  
                                    </div>

                                    <div className='confirmPasswordDiv'>
                                        <label htmlFor="" className='label'> Confirm Password </label> <br/> 
                                        <div>
                                            <input type="password" placeholder='Enter Password' className='email'/>
                                            <img src={eyeLogo} alt="" srcset="" className="signUpImageEyeImage"/>
                                        </div>
                                        

                                    </div>

                                    <div className="signUpBtnDiv">
                                        <button className="signUpBtn"> Sign Up </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                </Fragment>
            )
        }

        // else if the status is white 
        else {
            // Returning the jsx component 
            return (
                <Fragment>
                    <div className="signForm">
                            <div className="formDiv">
                                <div className="container">
                                    <div className="displayHeadersPara">
                                        <h2 className="signUpHeader">  Sign up </h2> <br />

                                        <p className="signUpPara"> 
                                            Register with the right details to start using the platform 
                                        </p>
                                    </div>
                                    <div className="fullNameDiv">
                                        <label htmlFor="" className='label'> Full Name </label> < br/> 
                                        <input type="text" placeholder='Enter your Full Name' className="fullname"/>

                                    </div>

                                    <div className='emailDiv'>
                                        <label htmlFor="" className='label'> Email </label> <br/> 
                                        <input type="text" placeholder='Enter your Email address' className='email'/>

                                    </div>

                                    <div className="passwordDiv">
                                        <label htmlFor="" className='label'> Password </label> <br /> 
                                        <div>
                                            <input type="password" placeholder='Enter Password' className="password" />
                                            <img src={eyeLogo} alt="" srcset="" className="signUpImageEyeImage"/>
                                        </div>
                                    

                                    </div>

                                    <div className="radioBtnDiv">
                                        <div className="checkboxDiv">
                                            <input type="checkbox" name="" id="" />
                                            <label className="checkboxPara label"> User Numbers </label> <br />
                                        </div>

                                        <div className="checkboxDiv">
                                            <input type="checkbox" name="" id="" />
                                            <label className="checkboxPara label"> User Capital Letters </label> <br /> 
                                        </div>

                                        <div className="checkboxDiv">
                                            <input type="checkbox" name="" id="" />
                                            <label className="checkboxPara label"> Use Small Letters </label> <br />
                                        </div>

                                        <div className='checkboxDiv'>
                                            <input type="checkbox" name="" id="" />
                                            <label className="checkboxPara label"> Use Special Characters e.g @#![-%*& </label> <br />
                                        </div>  
                                    </div>

                                    <div className='confirmPasswordDiv'>
                                        <label htmlFor="" className='label'> Confirm Password </label> <br/> 
                                        <div>
                                            <input type="password" placeholder='Enter Password' className='email'/>
                                            <img src={eyeLogo} alt="" srcset="" className="signUpImageEyeImage"/>
                                        </div>
                                        

                                    </div>

                                    <div className="signUpBtnDiv">
                                        <button className="signUpBtn"> Sign Up </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                </Fragment>
            )
        }
    }
}


// Exportin the modules 
export default SignUpFormDiv; 
