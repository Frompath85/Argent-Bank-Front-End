import {createSlice} from '@reduxjs/toolkit'

export const dataSlice = createSlice({
    name: 'data',
    initialState:{  
        token : "",
        email :'',
        firstName : "",
        lastName :"",
    },
    reducers:{
        setToken: (state, action)=>{
            state.token = action.payload
        },
        setEmail: (state, action)=>{
            state.email = action.payload 
        },
        setFirstName: (state, action)=>{
            state.firstName = action.payload
        },
        setLastName: (state, action)=>{
            state.lastName = action.payload
        }
    }
})
export const {setToken, setEmail, setFirstName, setLastName} = dataSlice.actions
export default dataSlice.reducer;