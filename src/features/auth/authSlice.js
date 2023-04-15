import { createSlice} from "@reduxjs/toolkit";

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
    if (response.ok) {
      const result = await response.json();
      dispatch(loginSuccess(result));
    } else throw new Error("Incorrect Username or password");
  } catch (e) {
    console.log(e);
    dispatch(loginFailure(e.message));
  }
};
export const logout = () => async (dispatch) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/logout`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) dispatch(logoutSuccess());
    else alert("Unable to logout, please try again or contact the developer");
  } catch (e) {
    console.log(e);
  }
};

export const registerAsync = (body) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    if(response.ok){
      const result = await response.json();
      dispatch(loginSuccess(result));
    }else throw new Error("Username taken")
    
  } catch (e) {
    dispatch(loginFailure(e.message));
  }
};


export const selectToken = (state) => state.auth.token;

export default authSlice.reducer;
