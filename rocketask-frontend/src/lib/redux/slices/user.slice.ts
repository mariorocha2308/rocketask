import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
	name: 'user',
  initialState: {
    user: {
    	uuid: '',
     	user: '',
      access_token: ''
    }
  },
  reducers: {
    session: (state, action) => {
     	state.user = action.payload
    }
  }
})

export const { session } = userSlice.actions
export default userSlice.reducer
