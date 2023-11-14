import {createSlice} from '@reduxjs/toolkit'

export const dataSlice = createSlice({
    name: 'data',
    initialState:{
        token : null,
        username : null,
        firstname : null,
    },
    reducers:{
        setToken: (state, action)=>{
            state.token = action.payload.token
        },
        setUserName: (state, action)=>{
            state.username = action.payload.username
        },
        setFirstName: (state, action)=>{
            state.firstname = action.payload.firstname
        }
    }
})
export const {setToken, setUserName, setFirstName} = dataSlice.reducer
export default dataSlice.reducer;