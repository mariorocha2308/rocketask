import * as API from '@/lib/HttpClient'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const postTask = createAsyncThunk(
  'tasks/postTask',
  async ({ title, description, token }: {title: string, description: string, token: string}) => {
    const response = await API.post('/tasks', { title, description }, token);
    return response.data;
  }
);

export const putTask = createAsyncThunk(
  'tasks/putTask',
  async ({ id, title, description, token }: {id: number, title: string, description: string, token: string}) => {
    const response = await API.put(`/tasks/${id}`, { title, description }, token);
    return response.data;
  }
);

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

      }
    ]
  },
  reducers: {
  },
  extraReducers: (builder) => {
      builder
        .addCase(postTask.fulfilled, (state, action) => {
          state.listTasks.push(action.payload);
        })
        .addCase(putTask.fulfilled, (state, action) => {
        	state.listTasks = state.listTasks.map((task) =>
            task.id === action.payload.id ? action.payload : task
          );
        })
    },
})

// export const { postTask } = taskSlice.actions
export default taskSlice.reducer
