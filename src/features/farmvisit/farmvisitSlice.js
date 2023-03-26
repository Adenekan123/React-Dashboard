import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  farmvisits: [],
  isLoading: false,
  error: null,
};

const farmvisitSlice = createSlice({
  name: "farmvisits",
  initialState,
  reducers: {
    getFarmvisitsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getFarmvisitsSuccess(state, action) {
      state.isLoading = false;
      state.farmvisits = action.payload;
    },
    getFarmvisitsFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    addFarmvisitStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    addFarmvisitSuccess(state, action) {
      state.isLoading = false;
      state.farmvisits = [...state.posts, action.payload];
    },
    addFarmvisitFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    deleteFarmvisitSuccess(state, action) {
      const deletedFarmvisit = action.payload;
      const postIndex = state.farmvisits.findIndex(
        (post) => post.id === deletedFarmvisit.id
      );
      if (postIndex !== -1) {
        state.farmvisits = state.farmvisits.filter(
          (farmvisit) => farmvisit._id !== deletedFarmvisit._id
        );
      }
    },
  },
});

export const {
  addFarmvisitStart,
  addFarmvisitSuccess,
  addFarmvisitFailure,
  getFarmvisitsStart,
  getFarmvisitsSuccess,
  getFarmvisitsFailure,
  deleteFarmvisitSuccess,
} = farmvisitSlice.actions;

export const fetchFarmvisits = () => async (dispatch) => {
  dispatch(getFarmvisitsStart());
  const token = localStorage.getItem("mktoken");
  try {
    const response = await fetch("https://dorfville.cyclic.app/farmvisits", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 500) throw new Error("Server error");
    const posts = await response.json();
    dispatch(getFarmvisitsSuccess(posts));
  } catch (error) {
    console.log(error);
    dispatch(getFarmvisitsFailure(error.message));
  }
};
export const fetchFarmvisit = (visitid) => async (dispatch) => {
  if (visitid) {
    dispatch(getFarmvisitsStart());
    const token = localStorage.getItem("mktoken");
    try {
      const response = await fetch(
        `https://dorfville.cyclic.app/posts/${visitid}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 500) throw new Error("Server error");
      const posts = await response.json();
      dispatch(getFarmvisitsSuccess(posts));
    } catch (error) {
      console.log(error);
      dispatch(getFarmvisitsFailure(error.message));
    }
  } else {
    dispatch(getFarmvisitsFailure("invalid Post"));
  }
};

export const addFarmvisit = (data) => async (dispatch) => {
  dispatch(addFarmvisitStart());
  const token = localStorage.getItem("mktoken");
  const formData = new FormData();
  formData.append("title", data["title"]);
  formData.append("body", data["body"]);
  formData.append("image", data["image"]);
  try {
    const response = await fetch(`https://dorfville.cyclic.app/posts`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    if (response.status === 401 && result.message)
      return dispatch(addFarmvisitFailure(result.message));
    dispatch(addFarmvisitSuccess(result));
  } catch (error) {
    console.error("Error adding post:", error);
    dispatch(addFarmvisitFailure(error));
  }
};

export const deleteFarmvisit = (visitid) => async (dispatch) => {
  const token = localStorage.getItem("mktoken");
  try {
    const response = await fetch(
      `https://dorfville.cyclic.app/farmvisits/${visitid}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      }
    );
    const result = await response.json();
    dispatch(deleteFarmvisitSuccess(result));
  } catch (error) {
    console.error("Error deleting post:", error);
  }
};

// export const selectPosts = (state) => state.posts.posts;
// export const selectIsLoading = (state) => state.posts.isLoading;
// export const selectError = (state) => state.posts.error;

export default farmvisitSlice.reducer;
