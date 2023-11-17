import React from 'react'
import '../styles/Home.css'
import BankLogo from '../assets/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector} from 'react-redux'

export default function Header() {
  // je teste si je suis connecté ou pas
  const token = useSelector(state => state.data.token)
  const firstname = useSelector(state => state.data.firstName)

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
     { token ?  
        <div>
          <Link className="main-nav-item" to="/Profile">
            <FontAwesomeIcon icon={faCircleUser} />
            <span> {firstname} </span>
          </Link>  
          <Link className="main-nav-item" to="/LogOut">  
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span> Sign Out</span>
          </Link>  
        </div>
      :
        <div>
          <Link className="main-nav-item" to={"/Login"}>
            <FontAwesomeIcon icon={faCircleUser} />
            <span>   Sign In</span>
          </Link>
        </div> 
     }
    </nav>
  )
}