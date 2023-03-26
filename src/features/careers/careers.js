import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  careers: [],
  isLoading: false,
  error: null,
  success: false,
};

const farmvisitSlice = createSlice({
  name: "careers",
  initialState,
  reducers: {
    getCareersStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getCareersSuccess(state, action) {
      state.isLoading = false;
      state.careers = action.payload;
    },
    getCareersFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    deleteCareersSuccess(state, action) {
      const deletedCareer = action.payload;
      const postIndex = state.careers.findIndex(
        (post) => post.id === deletedCareer.id
      );
      if (postIndex !== -1) {
        state.careers = state.careers.filter(
          (career) => career._id !== deletedCareer._id
        );
      }
    },
  },
});

export const {
  getCareersStart,
  getCareersSuccess,
  getCareersFailure,
  deleteCareersSuccess,
} = farmvisitSlice.actions;

export const fetchCareers = () => async (dispatch) => {
  dispatch(getCareersStart());
  const token = localStorage.getItem("mktoken");
  try {
    const response = await fetch("https://dorfville.cyclic.app/career", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 500) throw new Error("Server error");
    const careers = await response.json();
    dispatch(getCareersSuccess(careers));
  } catch (error) {
    console.log(error);
    dispatch(getCareersFailure(error.message));
  }
};

export const deleteCareer = (careerid) => async (dispatch) => {
  const token = localStorage.getItem("mktoken");
  try {
    const response = await fetch(
      `https://dorfville.cyclic.app/careers/${careerid}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    dispatch(deleteCareersSuccess(result));
  } catch (error) {
    console.error("Error deleting carreer:", error);
  }
};

// export const selectPosts = (state) => state.posts.posts;
// export const selectIsLoading = (state) => state.posts.isLoading;
// export const selectError = (state) => state.posts.error;

export default farmvisitSlice.reducer;
