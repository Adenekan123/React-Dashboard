import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
  success: false,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    resetSuccess(state) {
      state.success = false;
    },
    getPostsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getPostsSuccess(state, action) {
      state.isLoading = false;
      state.posts = action.payload;
    },
    getPostsFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    addPostsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    addPostsSuccess(state, action) {
      state.isLoading = false;
      state.posts = [...state.posts, action.payload];
      state.success = true;
      alert("Post Created successfully");
    },
    addPostsFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    updatePostSuccess(state, action) {
      const updatedPost = action.payload;
      const postIndex = state.posts.findIndex(
        (post) => post.id === updatedPost.id
      );
      if (postIndex !== -1) {
        state.posts.splice(postIndex, 1, updatedPost);
        state.success = true;
        alert("Post updated successfully");
      }
    },
    deletePostSuccess(state, action) {
      const deletedPost = action.payload;
      const postIndex = state.posts.findIndex(
        (post) => post.id === deletedPost.id
      );
      if (postIndex !== -1) {
        state.posts = state.posts.filter(
          (post) => post._id !== deletedPost._id
        );
        state.success = true;
      }
    },
  },
});

export const {
  resetSuccess,
  addPostsStart,
  addPostsSuccess,
  addPostsFailure,
  getPostsStart,
  getPostsSuccess,
  getPostsFailure,
  updatePostSuccess,
  deletePostSuccess,
} = postSlice.actions;

export const fetchPosts = () => async (dispatch) => {
  console.log("process", process.env.REACT_APP_API_URL);
  dispatch(getPostsStart());
  const token = localStorage.getItem("mktoken");
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 500) throw new Error("Server error");
    const posts = await response.json();
    dispatch(getPostsSuccess(posts));
  } catch (error) {
    console.log(error);
    dispatch(getPostsFailure(error.message));
  }
};
export const fetchPost = (postid) => async (dispatch) => {
  if (postid) {
    dispatch(getPostsStart());
    const token = localStorage.getItem("mktoken");
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/posts/${postid}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 500) throw new Error("Server error");
      const posts = await response.json();
      dispatch(getPostsSuccess(posts));
    } catch (error) {
      console.log(error);
      dispatch(getPostsFailure(error.message));
    }
  } else {
    dispatch(getPostsFailure("invalid Post"));
  }
};

export const addPost = (data) => async (dispatch) => {
  dispatch(addPostsStart());
  const token = localStorage.getItem("mktoken");
  const formData = new FormData();
  formData.append("title", data["title"]);
  formData.append("body", data["body"]);
  data["image"] && formData.append("image", data["image"]);
  data["pdf"] && formData.append("pdf", data["pdf"]);

    try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    if (response.status === 401 && result.message)
      return dispatch(addPostsFailure(result.message));
    dispatch(addPostsSuccess(result));
  } catch (error) {
    console.error("Error adding post:", error);
    dispatch(addPostsFailure(error));
  }
};
export const updatePost = (postId, updatedData) => async (dispatch) => {
  const token = localStorage.getItem("mktoken");

  const formData = new FormData();
  formData.append("title", updatedData["title"]);
  formData.append("body", updatedData["body"]);
  updatedData["image"] && formData.append("image", updatedData["image"]);
  updatedData['pdf'] &&  formData.append("pdf", updatedData["pdf"]);
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/posts/${postId}`,
      {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    dispatch(updatePostSuccess(result));
  } catch (error) {
    console.error("Error updating post:", error);
  }
};

export const deletePost = (postId) => async (dispatch) => {
  const token = localStorage.getItem("mktoken");
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/posts/${postId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    dispatch(deletePostSuccess(result));
  } catch (error) {
    console.error("Error deleting post:", error);
  }
};

// export const selectPosts = (state) => state.posts.posts;
// export const selectIsLoading = (state) => state.posts.isLoading;
// export const selectError = (state) => state.posts.error;

export default postSlice.reducer;
