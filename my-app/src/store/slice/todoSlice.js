import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        value: [],
        copyValue: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.value = [...state.value, action.payload]
            state.copyValue = state.value

        },
        removeTodo: (state, action) => {
            state.value = state.value.filter(( _ , index ) => index !== action.payload)
            state.copyValue = state.value

        },
        searchTodo: (state, action) => {
            if (action.payload !== '') {
                state.value = state.value.filter(( item ) => item.toLowerCase().includes(action.payload))
            } else {
                state.value = state.copyValue
            }
        }
    }
})


export const { addTodo, removeTodo, searchTodo } = todoSlice.actions

export default todoSlice.reducer