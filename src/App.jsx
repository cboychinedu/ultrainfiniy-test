// Importing the necessary modules 
import './css/App.css';
import React, { Component, Fragment } from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Signup from './component/Signup';
import Dashboard from './component/Dashboard';


// Rendering the App component 
class App extends Component {
  state = {
    backgroundColor: "white", 
    buttonText: "Dark Mode"
  }

  // Creating a function for changing the background color 
  changeBackgroundColor = (event) => {
    // Checking the state 
    if (this.state.backgroundColor === "black") {
      this.setState({
        backgroundColor: "white", 
        buttonText: "Dark Mode", 
     })
    }

    // Else 
    else if (this.state.backgroundColor === "white") {
      this.setState({
        backgroundColor: "black",
        buttonText: "White Mode",  
      })
    }



  }

  // Rendering the component 
  render() {
    return(
      <Fragment> 
         <BrowserRouter> 
         {/* Setting the routes configurations */}
         <Routes> 
            <Route exact path="/" element={
              <Login changeBackgroundColor={this.changeBackgroundColor} 
              state={this.state.backgroundColor}
              buttonText={this.state.buttonText}
            />} />
            <Route path="/signup" element={
              <Signup changeBackgroundColor={this.changeBackgroundColor}
              state={this.state.backgroundColor}
              buttonText={this.state.buttonText}
            /> } /> 
            <Route path="/dashboard" element={
              <Dashboard changeBackgroundColor={this.changeBackgroundColor}
              state={this.state.backgroundColor}
              buttonText={this.state.buttonText}
            /> } /> 

         </Routes>
         </BrowserRouter>
      </Fragment>
    )
  }
}

// Exporting the default app 
export default App; 
