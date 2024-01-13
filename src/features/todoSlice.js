import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        //     {
        //     id: 1,
        //     todo: 'hello todo',
        //     completed: false
        // }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                todo: action.payload?.todo,
                completed: action.payload?.completed || false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
        },
        toggleComplete: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
        },
    }
})

export const { addTodo, removeTodo, updateTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
