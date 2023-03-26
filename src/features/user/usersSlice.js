import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  totalRegistered: 0,
  totalSuspended: 0,
  totalDailyExp: 0,
  totalWeeklyExp: 0,
  totalMonthlyExp: 0,
  yearlyExp: 0,
  isLoading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsersStart(state) {
      state.isLoading = true;
    },
    getUsersSuccess(state, action) {
      state.isLoading = false;
      state.users = action.payload;
    },
    getUsersFailure(state) {
      state.isLoading = false;
      state.users = [];
    },

    calculateTotal: (state, { payload }) => {
      let totalAmount = 0;
      state.users.forEach((user) => (totalAmount += user[payload.field]));
      state[payload.type] = totalAmount;
    },
    totalUsers: (state) => {
      state.totalRegistered = state.users.length;
    },
  },
});

export const {
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
  calculateTotal,
  totalUsers,
} = usersSlice.actions;

export const getUsers = () => async (dispatch) => {
  dispatch(getUsersStart());
  const token = localStorage.getItem("mktoken");
  try {
    const response = await fetch("http://localhost:5000/api/users", {
      credentials: "include",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const users = await response.json();
    dispatch(getUsersSuccess(users));
  } catch (e) {
    console.log(e);
    dispatch(getUsersFailure());
  }
};

export default usersSlice.reducer;
