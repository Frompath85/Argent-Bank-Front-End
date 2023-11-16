import React from 'react'
import "../styles/Home.css"
import Header from '../components/Header'
import { GetUserData } from '../services/services'
import {useDispatch, useSelector} from 'react-redux'
import { setEmail, setFirstName, setLastName } from '../features/dataReducer' 
import { Navigate } from 'react-router-dom'


export default   function User() {
  const dispatch = useDispatch(); 

  const token = useSelector(state => state.data.token)
  console.log(token)
  if(token == "") return <Navigate to="/login" />

  const UserData = GetUserData(token);
  UserData.then(user => {
    dispatch(setEmail(user.body.email));
    dispatch(setFirstName(user.body.firstName));
    dispatch(setLastName(user.body.lastName));
});

const email = useSelector(state => state.data.email)
console.log(email)
const firstname = useSelector(state => state.data.firstName)
console.log(firstname)
const lastname = useSelector(state => state.data.lastName)
console.log(lastname)

  return (
    <>
    <Header OnUserPage = 'true' UserName = {firstname}/>
    {/* //Tony first name */}
    <main class="main bg-dark-user">
    <div class="header">
      <h1>Welcome back<br /> {firstname} {lastname} </h1>
      <button class="edit-button">Edit Name</button>
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
