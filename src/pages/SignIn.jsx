import React from 'react'
import '../styles/Home.css'
import Header from '../components/Header'
import SignInForm from '../components/SignInForm'

export default function SignIn() {
  return (
    <>
    <Header OnUserPage = 'false'/>
    <main class="main bg-dark">
      <SignInForm />
    </main>
  </>
  )
}
