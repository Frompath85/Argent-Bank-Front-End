import {configureStore} from '@reduxjs/toolkit'
import dataReducer from './features/dataReducer'

export const store = configureStore({
    reducer:{
        data : dataReducer,
    }
})