import { configureStore } from "@reduxjs/toolkit";

//reducers
import menuReducer from "./features/menu/menuSlice";
import usersReducer from "./features/user/usersSlice";
import authReducer from "./features/auth/authSlice";
import modalReducer from "./features/modal/modalSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    auth: authReducer,
    users: usersReducer,
    modal: modalReducer,
  },
});

export default store;
