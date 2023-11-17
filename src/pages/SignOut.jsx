import React from 'react'
import { useDispatch } from 'react-redux'
import { SetSignOut } from '../features/dataReducer'
import { Navigate } from 'react-router-dom'

export default function SignOut() {

    const dispatch = useDispatch();
    dispatch(SetSignOut())
    
   return <Navigate to="/"/>
}
