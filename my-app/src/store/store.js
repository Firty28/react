import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './slice/todoSlice.js'


export default configureStore({
    reducer: todoSlice
})