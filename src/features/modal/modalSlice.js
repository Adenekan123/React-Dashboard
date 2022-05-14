import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  componentdetail: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalOpen: (state, { payload }) => {
      state.isOpen = true;
      state.componentdetail = payload;
    },
    modalClose: (state) => {
      state.isOpen = false;
      state.componentdetail = null;
    },
  },
});

export const { modalOpen, modalClose } = modalSlice.actions;
export default modalSlice.reducer;
