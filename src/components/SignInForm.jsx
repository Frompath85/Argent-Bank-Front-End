import React from 'react'
import {useRef, useState} from 'react'
import '../styles/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSignIn } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { GetToken } from '../services/services'

export default  function  SignInForm() {

    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const navigate = useNavigate() 

    const [TokendData, setData]= useState();
    // console.log(TokendData)
     
    const SubmitHundler = async (event) =>{

      event.preventDefault();
      const entredEmail = emailInputRef.current.value
      const entredPassword = passwordInputRef.current.value
      console.log(entredEmail, entredPassword);

      const token =  await GetToken(entredEmail,entredPassword)
      // console.log(token)
      setData(token)

    }

  return (
    <section class="sign-in-content">
    <FontAwesomeIcon icon={faSignIn} />
    <h1>Sign In</h1>
    <form >
      <div class="input-wrapper">
        <label for="username">Username</label>
        <input type="text" id="username" ref={emailInputRef}/>
      </div>
      <div class="input-wrapper">
        <label for="password">Password</label>
        <input type="password" id="password" ref={passwordInputRef}/>
      </div>
      <div class="input-remember">
        <input type="checkbox" id="remember-me" />
        <label for="remember-me">Remember me </label >
      </div>
  
      <button class="sign-in-button"  onClick={ TokendData? navigate('/User'): SubmitHundler}>Sign In</button> 
    
    </form>
  </section>
  )
}
