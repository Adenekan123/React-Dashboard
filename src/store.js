import { configureStore } from "@reduxjs/toolkit";

//reducers
import usersReducer from "./features/user/usersSlice";
import modalReducer from "./features/modal/modalSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    modal: modalReducer,
  },
});

export default store;
