import React from 'react'
import { useState, useEffect} from 'react'
import '../styles/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSignIn } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { GetToken } from '../services/services'
//pour utiliser le store dans un compsant il faut utiliser le hook UseSelector et UseDispath
import {useDispatch, useSelector} from 'react-redux'
import { setToken } from '../features/dataReducer' 


export default  function  SignInForm() {

    const dispatch = useDispatch();
    const statetoken = useSelector(state => state.data.token)
    console.log(statetoken)

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    // console.log(username, password);

    const navigate = useNavigate() 

    const SubmitHundler = async (event) =>{
      event.preventDefault();
      const tokenValue =  await GetToken(username,password)
      console.log(tokenValue)
      // tester si la valeur du token alors se rediriger vers le profil
        if(tokenValue){
          dispatch(setToken( tokenValue ))
          navigate('/User')
        }
        else console.log("token abscent")
    
    }

  return (
    <section class="sign-in-content">
    <FontAwesomeIcon icon={faSignIn} />
    <h1>Sign In</h1>
    <form >
      <div class="input-wrapper">
        <label for="username">Username</label>
        <input type="text" id="username" onChange={e => setUserName(e.target.value)}/>
      </div>
      <div class="input-wrapper">
        <label for="password">Password</label>
        <input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
      </div>
      <div class="input-remember">
        <input type="checkbox" id="remember-me" />
        <label for="remember-me">Remember me </label >
      </div>
      {/* <button class="sign-in-button"  onClick={ TokendData? navigate('/User'): SubmitHundler}>Sign In</button>  */}
      <button class="sign-in-button"  onClick={SubmitHundler}>Sign In</button> 
    
    </form>
  </section>
  )
}
