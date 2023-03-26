import { configureStore } from "@reduxjs/toolkit";

//reducers
import menuReducer from "./features/menu/menuSlice";
import usersReducer from "./features/user/usersSlice";
import postReducer from "./features/post/postSlice";
import farmvisitReducer from "./features/farmvisit/farmvisitSlice";
import authReducer from "./features/auth/authSlice";
import modalReducer from "./features/modal/modalSlice";
import careerReducer from "./features/careers/careers";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    auth: authReducer,
    users: usersReducer,
    posts: postReducer,
    farmvisits: farmvisitReducer,
    careers: careerReducer,
    modal: modalReducer,
  },
});

export default store;
