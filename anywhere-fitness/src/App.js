import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/Register";
import HomePage from './Components/HomePage';
import './App.css'
import styled from 'styled-components';


const App = () => {
  return (
    
  <Router>
        <Route exact path='/' component={HomePage}/>
          <Route exact path="/SignUp" component={SignUp}/>
          <Route exact path="/LogIn" component={LogIn}/>
    </Router>
   
  );
};
export default App;