import { createSlice, nanoid } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
      addTodo: {
        reducer(state, action) {
          const { id, text } = action.payload;
          state.push({ id, text, completed: false })
        },
        prepare(text) {
          return { payload: { id: nanoid(), text } }
        }
      },
      toggleTodo(state, action) {
        const todo = state.find(todo => todo.id === action.payload)
        if (todo) {
          todo.completed = !todo.completed
        }
      },
      deleteTodo(state, action) {
        return state.filter(todo => todo.id !== action.payload)
      }
    }
  });
  
  export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions
  
  export const selectTodos = state => state.todos
  
  export default todoSlice.reducer