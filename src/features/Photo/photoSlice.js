import { createSlice } from "@reduxjs/toolkit";

const photo = createSlice({
  name: "photo",
  initialState: [],
  reducers: {
    addPhoto: (state, action) => {
      state.push(action.payload);
    },
  },
});
const { reducers, actions } = photo;
export const { addPhoto } = actions;
export default reducers;
