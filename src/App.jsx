// Importing the necessary modules 
import './css/App.css';
import React, { Component, Fragment } from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Signup from './component/Signup';
import Dashboard from './component/Dashboard';


// Rendering the App component 
class App extends Component {
  state = {}

  // Rendering the component 
  render() {
    return(
      <Fragment> 
         <BrowserRouter> 
         {/* Setting the routes configurations */}
         <Routes> 
            <Route exact path="/" element={<Login />} />
            <Route path="/signup" element={<Signup /> } /> 
            <Route path="/dashboard" element={<Dashboard /> } /> 

         </Routes>
         </BrowserRouter>
      </Fragment>
    )
  }
}

// Exporting the default app 
export default App; 
