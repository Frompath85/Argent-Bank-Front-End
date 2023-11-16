import React from 'react'
import "../styles/Home.css"
import Header from '../components/Header'
import { GetUserData } from '../services/services'
import {useDispatch, useSelector} from 'react-redux'
import { setEmail, setFirstName, setLastName } from '../features/dataReducer' 
import { Navigate } from 'react-router-dom'
import { useState, useEffect } from "react";


export default   function User() {

  const dispatch = useDispatch(); 

  const[NewFirstName, setNewFirstName]= useState("")
  const[NewLastName, setNewLastName]= useState("")

  const token = useSelector(state => state.data.token)
  console.log(token)
  // if(token == "") return <Navigate to="/login" />

  const UserData = GetUserData(token);
  UserData.then(user => {
    dispatch(setEmail(user.body.email));
    dispatch(setFirstName(user.body.firstName));
    dispatch(setLastName(user.body.lastName));
});

const email = useSelector(state => state.data.email)
const firstname = useSelector(state => state.data.firstName)
const lastname = useSelector(state => state.data.lastName)

const EditProfil = ()=>{
  console.log("Edit")
  document.getElementById("edit-section").style.display = "block";
  document.querySelector(".edit-button").style.display = "none";
  document.querySelector(".first-last-name").style.display = "none";
}
const SaveProfil = ()=>{
  console.log("save")
}
const CancelProfil = ()=>{
  console.log("Cancel edit ")
}


  return (
    <>
    <Header OnUserPage = 'true' UserName = {firstname}/>
    <main class="main bg-dark-user">
    <div class="header">
      <h1>Welcome back<br /> <span className='first-last-name'> hani {firstname} {lastname} </span></h1>
      <button class="edit-button" onClick={EditProfil}>Edit Name</button>
    </div>
    {/* section modification données Profil */}
    <div id='edit-section'>
      <form id='edit-form'>
        <div className='input-section'>
           <input placeholder = {firstname} className='edit-profil-input' type="text" id='firstName' onChange={e => setNewFirstName(e.target.value)}/> 
           <input placeholder = {lastname} className='edit-profil-input' type="text" id='lastName' onChange={e => setNewLastName(e.target.value)}/>
        </div>
        <div className='button-section'>
          <button className='edit-profil-button' onClick={SaveProfil}>Save</button>
          <button className='edit-profil-button' onClick={CancelProfil}>Cancel</button>
        </div>
      </form>

    </div>

    <h2 class="sr-only">Accounts</h2>
    <section class="account">
      <div class="account-content-wrapper">
        <h3 class="account-title">Argent Bank Checking (x8349)</h3>
        <p class="account-amount">$2,082.79</p>
        <p class="account-amount-description">Available Balance</p>
      </div>
      <div class="account-content-wrapper cta">
        <button class="transaction-button">View transactions</button>
      </div>
    </section>
    <section class="account">
      <div class="account-content-wrapper">
        <h3 class="account-title">Argent Bank Savings (x6712)</h3>
        <p class="account-amount">$10,928.42</p>
        <p class="account-amount-description">Available Balance</p>
      </div>
      <div class="account-content-wrapper cta">
        <button class="transaction-button">View transactions</button>
      </div>
    </section>
    <section class="account">
      <div class="account-content-wrapper">
        <h3 class="account-title">Argent Bank Credit Card (x8349)</h3>
        <p class="account-amount">$184.30</p>
        <p class="account-amount-description">Current Balance</p>
      </div>
      <div class="account-content-wrapper cta">
        <button class="transaction-button">View transactions</button>
      </div>
    </section>
  </main>
  </>
  )
}
