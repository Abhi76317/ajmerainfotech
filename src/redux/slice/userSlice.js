import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  users: [],
};
const userSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.users = action.payload;
    },
  },
});
export const { setUsers } = userSlice.actions;
export default userSlice.reducer;
