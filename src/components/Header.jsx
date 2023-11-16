import React from 'react'
import '../styles/Home.css'
import BankLogo from '../assets/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export default function Header(props) {
  // console.log(props.OnUserPage)

  return (
    <nav className="main-nav"> 
    <Link className="main-nav-logo" to={"/"}>
        <img
          className="main-nav-logo-image"
          src={BankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
    </Link>
     {
     props.OnUserPage =='false' ?
      <div>
        <Link className="main-nav-item" to={"/Login"}>
          <FontAwesomeIcon icon={faCircleUser} />
          <span>   Sign In</span>
        </Link>
      </div> 
      :  
      <div>
        <Link className="main-nav-item" to="/User">
          <FontAwesomeIcon icon={faCircleUser} />
          <span> {props.UserName}</span>
        </Link>  
        <Link className="main-nav-item" to="/LogOut">  
          <FontAwesomeIcon icon={faRightFromBracket} />
          <span> Sign Out</span>
        </Link>  
      </div>
     }
    </nav>
  )
}