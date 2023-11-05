import React from 'react'
import '../styles/Home.css'
import BankLogo from '../assets/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function Header(props) {
  // console.log(props.OnUserPage)
  return (
    <nav className="main-nav"> 
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src={BankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
     {
     props.OnUserPage =='false' ? 
      <div>
          <a className="main-nav-item" href="./sign-in.html">
          <FontAwesomeIcon icon={faCircleUser} />
          <span>   Sign In</span>
          </a>
      </div> 
      :  
      <div>
          <a className="main-nav-item" href="./sign-in.html">
          <FontAwesomeIcon icon={faCircleUser} />
          <span>   UserName</span>
          </a>
          <a className="main-nav-item" href="./sign-in.html">
          <FontAwesomeIcon icon={faRightFromBracket} />
          <span>   Sign Out</span>
          </a>
      </div>
     }
    </nav>
  )
}
