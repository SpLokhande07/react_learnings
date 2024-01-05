import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos:[{id:1, text: "Hello World"}]
}

export const  todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state,action) => {
           const todo =  {id: nanoid(), text: action.payload}
           state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            const id = action.payload
            const newTodos = state.todos.filter(todo => todo.id!== id)
            state.todos = newTodos
        },
        updateTodo: (state,action) => {
            const {id, text} = action.payload
            const newTodos = state.todos.map(todo => {
                if(todo.id === id){
                    todo.text = text
                }
                return todo
            })
            state.todos = newTodos
        },
        toggleCompleted: (state,action) => {
            const id = action.payload
            const newTodos = state.todos.map(todo => {
                if(todo.id === id){
                    todo.completed =!todo.completed
                }
                return todo
            })
            state.todos = newTodos
        }
    }
})

export const {addTodo, removeTodo, updateTodo, toggleCompleted} = todoSlice.actions

export default todoSlice.reducer