import React from "react";
import {Route, Link} from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import HomePage from './components/HomePage';
import './App.css'
import styled from 'styled-components';


const WrapperDiv = styled.div`
width:30%;
margin:2% auto;
background-color:White;
box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 5px;

`;

const NavDiv = styled.div`
font-size:1.8em;
`;

const App = () => {
  return (
  
    <WrapperDiv>
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

    </WrapperDiv>
    
   
  );
};
export default App;