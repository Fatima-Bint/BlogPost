import React from 'react';
import logo from '../img/logo';
import "../components/login.css"

function Login () {

  const handleClick = () =>
  alert('Login Success!')
  return(
    <div>
      <div>
                
            </div>
            <div id= 'col' className = 'pic'>
            <img class = 'logo' src ={logo} alt ='logo'/>
             <div id='col' class = 'form'>

            </div>
            
            <fieldset class = 'form'>
            <h2>Login</h2>

            <div class= 'inputs'>
            <label class='label'>Email </label><br/>
            <input type = 'email' placeholder ='Email'></input><br/>
            <br />
            <label class ='label'>Password</label><br/>
            <input type ='password' placeholder = 'password'></input>
            </div>

            <button type = 'submit' onClick= {handleClick}>Login</button>
            
            </fieldset>
            
            
        </div>
    </div>
  )
}

export default Login;