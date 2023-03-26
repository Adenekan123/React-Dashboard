import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//components
import { Header } from "../components/Header";
import { Aside } from "../components/Aside";
import { Main } from "../components/Main";
import { Container } from "../components/Container";

import { fetchPosts, deletePost } from "../features/post/postSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((store) => store.posts.posts);
  const isLoading = useSelector((store) => store.posts.isLoading);

  const onDelete = function (postid) {
    dispatch(deletePost(postid));
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container>
        <Aside />
        <Main>
          <div className="md:grid grid-cols-12 gap-3">
            {isLoading ? <h1>Loading...</h1> : ""}
            {posts
              ? posts.map((post, index) => (
                  <div
                    className="col-span-6 mb-4 md:mb-0"
                    key={index + post.title}>
                    <div className="bg-white">
                      {post.image && (
                        <img
                          className="w-full h-40 object-cover"
                          src={`data:${post.image.contentType};base64,${post.image.data}`}
                          alt={post.title}
                        />
                      )}

                      <div className="p-3">
                        <h3>{post.title}</h3>
                        <small>{post.createdAt}</small>
                      </div>
                      <div className="p-3 bg-gray-200">
                        <Link
                          to={`/editpost/${post._id}`}
                          className="bg-green-500 border-0 px-3 py-1 mr-2 text-white">
                          Edit
                        </Link>

                        <button
                          onClick={() => onDelete(post._id)}
                          className="bg-red-500 border-0 px-3 py-1 text-white">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
          {!posts.length ? (
            <h1 className="border w-full p-1 bg-green-100 text-center text-xl">
              No post found
            </h1>
          ) : (
            ""
          )}
        </Main>
      </Container>
    </>
  );
};

export default Posts;
