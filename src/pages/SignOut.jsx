import React from 'react'
import { useDispatch } from 'react-redux'
import { setToken, setEmail, setFirstName, setLastName } from '../features/dataReducer'
import { Navigate } from 'react-router-dom'


export default function SignOut() {

    const dispatch = useDispatch();

    // useEffect(() => { initialiser les données du store
        dispatch(setToken(""));
        dispatch(setEmail(""));
        dispatch(setFirstName(""));
        dispatch(setLastName(""));
    // });
    
   return <Navigate to="/" />
}
