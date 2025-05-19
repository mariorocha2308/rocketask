import * as API from '@/lib/HttpClient'
import { createSlice } from '@reduxjs/toolkit'

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    listTasks: [
      {
        id: 1,
        title: 'Task 1',
        description: 'Description of Task 1',
        status: 'pending',
        createdAt: new Date().toISOString(),
      },
      {
        id: 2,
        title: 'Task 2',
        description: 'Description of Task 2',
        status: 'completed',
        createdAt: new Date().toISOString()

      },
      {
        id: 3,
        title: 'Task 3',
        description: 'Description of Task 3',
        status: 'in-progress',
        createdAt: new Date().toISOString(),

      },
      {
        id: 4,
        title: 'Task 4',
        description: 'Description of Task 4',
        status: 'pending',
        createdAt: new Date().toISOString(),

      },
      {
        id: 5,
        title: 'Task 5',
        description: 'Description of Task 5',
        status: 'completed',
        createdAt: new Date().toISOString(),
      }
    ]
  },
  reducers: {
    postTask: (state, action) => {
      const newTask = {
        title: action.payload.title,
        description: action.payload.description
      }

      API.post('/tasks', newTask, action.payload.token)
      .then((res) => {
        if(res) state.listTasks.push(res)
      })
    },
    // putTask: (state, action) => {

    // }
  }
})

export const { } = taskSlice.actions
export default taskSlice.reducer
