import {createSlice} from '@reduxjs/toolkit'

export const todoCreateSlice = createSlice({
  name: 'todoCreate',
  initialState: {
    isModalOpen: false,
    todoId: undefined,
    title: '',
    text: ''
  },
  reducers: {
    setModalVisibility: (state, action) => {
      state.isModalOpen = action.payload
    },
    setTodoId: (state, action) => {
      state.todoId = action.payload
    },
    setTitle: (state, action) => {
      state.title = action.payload
    },
    setText: (state, action) => {
      state.text = action.payload
    }
  }
})

export const {setTitle, setText, setTodoId,setModalVisibility} = todoCreateSlice.actions
