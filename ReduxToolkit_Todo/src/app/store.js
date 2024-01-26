import {configureStore}  from '@reduxjs/toolkit';
import todoReducer from '../Features/Todo/todoSlice'

export const store=configureStore({
  reducer:todoReducer
})

// we need to import the reducer function from the todoSlice and add it to our store. By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state.