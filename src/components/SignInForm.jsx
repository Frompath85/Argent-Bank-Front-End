import React from 'react'
import {useRef, useState} from 'react'
import '../styles/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSignIn } from '@fortawesome/free-solid-svg-icons'


export default function SignInForm() {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const [TokendData, setData]= useState();
     console.log(TokendData)
     
    const SubmitHundler = (event) =>{

      event.preventDefault();
      const entredEmail = emailInputRef.current.value
      const entredPassword = passwordInputRef.current.value
      console.log(entredEmail, entredPassword);

      const url = 'http://localhost:3001/api/v1/user/login';

      // try{
          fetch(url, {
              method : 'POST',
              body :JSON.stringify({
                  email : entredEmail,
                  password : entredPassword,
              }),
              headers:{
                  'Content-Type':"application/json",
              }
          })
          .then((response)=> response.json())
          .then((data)=>{
            if(data.status == 200)
                 setData(data)
            else alert(data.message)
          })// message d'erreur s'affiche dans data
           .catch((err)=>console.log(err))
        // }  
        // catch( error) {// lorsque le serveur ne repond pas 
        //   console.log(error)
        // }
}

  return (
    <section class="sign-in-content">
    <FontAwesomeIcon icon={faSignIn} />
    <h1>Sign In</h1>
    <form onSubmit={SubmitHundler}>
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
      <button class="sign-in-button" type='submit'>Sign In</button> 
    </form>
  </section>
  )
}
