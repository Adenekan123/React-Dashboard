import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "./authService";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    loginStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      localStorage.setItem("mktoken", action.payload);
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
    },
    loginFailure(state, action) {
      localStorage.removeItem("mktoken");
      state.error = action.payload;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
    logoutSuccess(state, action) {
      localStorage.removeItem("mktoken");
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logoutSuccess } =
  authSlice.actions;

export const login = (credentials) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    const result = await response.json();
    dispatch(loginSuccess(result));
  } catch (e) {
    console.log(e);
    dispatch(loginFailure(e));
  }
};
export const logout = () => async (dispatch) => {
  try {
    await fetch(`${process.env.REACT_APP_API_URL}/auth/logout`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(logoutSuccess());
  } catch (e) {
    console.log(e);
    // dispatch(loginFailure(e));
  }
};

// export const logout = createAsyncThunk("/auth/logout", async () => {
//   try {
//     await API.logout();
//   } catch (e) {
//     console.log("Error logging out");
//   }
// });

export const register = createAsyncThunk(
  "/auth/register",
  async (user, thunkAPI) => {
    try {
      return await API.register(user);
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const selectToken = (state) => state.auth.token;

export default authSlice.reducer;
