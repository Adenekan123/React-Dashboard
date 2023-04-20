import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import { Header } from "../components/Header";
import { Aside } from "../components/Aside";
import { Main } from "../components/Main";
import { Container } from "../components/Container";

import {
  fetchFarmvisits,
  deleteFarmvisit,
} from "../features/farmvisit/farmvisitSlice";

const Farmvisits = () => {
  const dispatch = useDispatch();
  const { farmvisits, isLoading } = useSelector((store) => store.farmvisits);

  const onDelete = function (postid) {
    dispatch(deleteFarmvisit(postid));
  };

  useEffect(() => {
    dispatch(fetchFarmvisits());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container>
        <Aside />
        <Main>
          <div className="md:grid grid-cols-12 gap-3 justify-center">
            {isLoading ? <h1>Loading...</h1> : ""}
            {farmvisits
              ? farmvisits.map((farmvisit) => (
                  <div
                    className="col-span-8 mb-4 md:mb-0"
                    key={farmvisit.createdAt}>
                    <div className="bg-white">
                      <div className="p-3">
                        <h3>Date: {farmvisit.date}</h3>
                        <h3>Email: {farmvisit.email}</h3>
                        <p className="mt-3">{farmvisit.body}</p>
                      </div>
                      <div className="p-3 bg-gray-200">
                        <button
                          onClick={() => onDelete(farmvisit._id)}
                          className="bg-red-500 border-0 px-3 py-1 text-white">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
          {!farmvisits.length ? (
            <h1 className="border w-full p-1 bg-green-100 text-center text-xl">
              No Farm vist request found
            </h1>
          ) : (
            ""
          )}
        </Main>
      </Container>
    </>
  );
};

export default Farmvisits;
