import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import HomePage from './components/HomePage';
import './App.css'
import styled from 'styled-components';


const App = () => {
  return (
  <Router>
    <div>
      <div className='app-container'>
{/*       
      <NavDiv>
      <div id="con">
          <nav>
          <ul>
              <Link to="/">Home</Link>
              </ul>
              <ul>
              <Link to="/SignUp">Sign Up</Link>
              </ul>
              <ul>
                <Link to="/LogIn">Log In</Link>
              </ul>
          </nav>
          </div>
          </NavDiv> */}
          <HomePage />
      </div>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>

          <Route exact path="/LogIn">
            <LogIn />
          </Route>

    </div>
    </Router>
   
  );
};
export default App;