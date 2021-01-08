import React, { useState, useEffect} from 'react';
import * as yup from 'yup'
import  formSchema  from '../validation/formSchema'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'
import '../styles/Login.css'
import axios from 'axios'
const Login = () => {

  const [ login, setLogin ] = useState({
      username : "",
      password : "",
  });

  const [ errors , setErrors ] = useState({
      username : "",
      password : "",
  });

  const validateChange = e => {
      yup.reach( formSchema , e.target.name )
      .validate( e.target.value )
      .then(valid => {
          setErrors({
              ...errors, [e.target.name] : ""
          });
      })
      .catch( err => {
          setErrors({
              ...errors, [e.target.name] : err.errors[0]
          });
      });
  };
  useEffect(()=>{
    axios.get('')
      .then((res)=>{
        setLogin(res.data.results)
      })
      .catch(err => {
        console.log('ERROR')
      })
  },[])
  const history = useHistory();

 

  const postUser = (thisUser) => {
    axiosWithAuth()
    .post('/login', thisUser)
    .then((res) => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        history.push('/fitness')
    })
    .catch(error => {
        alert('Incorrect Username or Password!')
        console.log(error)
    })
}

  const formSubmit = e => {
    e.preventDefault();
  const thisUser ={
    username: login.username.trim(),
    password: login.password,
  };
  postUser(thisUser)
  };

  const inputChange = e => {
      e.persist();
      const newForm = {
          ...login, [e.target.name] : e.target.value
      };
      validateChange(e);
      setLogin(newForm);
      console.log(login)
  }

  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
      formSchema.isValid(login).then(valid => {
          setButtonDisabled(!valid)
      })
  }, [login]);
  console.log(buttonDisabled)

  return (
      <form className='form-container' onSubmit={formSubmit}>
          <h1>Log In</h1>
          <label htmlFor="username">
              <input
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              value={login.username}
              onChange={inputChange}
              />
              {errors.username.length > 0 ? ( <p className="errors">{errors.username}</p> ) : null}
          </label>
          <label htmlFor="password">
              <input 
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={login.password}
              onChange={inputChange}
              />
              {errors.password.length > 0 ? ( <p className="errors">{errors.password}</p> ) : null}
              </label>


                <div className='controls'>
                <button disabled={buttonDisabled}>Login</button>
                </div>
      </form>
  );
};

export default Login;