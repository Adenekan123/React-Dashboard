import { createSlice } from "@reduxjs/toolkit";
import Users from "../../users";

const initialState = {
  users: Users,
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
    toggleSuspendUser: (state, { payload }) => {
      const userIndex = state.users.findIndex(
        (user) => user.id === payload.userid
      );
      state.users[userIndex].suspended = !state.users[userIndex].suspended;
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

export const { toggleSuspendUser, calculateTotal, totalUsers } =
  usersSlice.actions;

export default usersSlice.reducer;
