import React, { useState, useEffect } from "react";

//components
import { Header } from "../components/Header";
import { Aside } from "../components/Aside";
import { Main } from "../components/Main";
import { Container } from "../components/Container";

import graph1 from "../graph1.png";
import graph2 from "../graph2.png";
import graph3 from "../graph3.png";

const initalState = {
  careerCount: 0,
  postCount: 0,
  farmVisitCount: 0,
};

const Dashboard = () => {
  const [counts, setCounts] = useState(initalState);

  const { careerCount, postCount, farmVisitCount } = counts;

  useEffect(() => {
    fetch("https://dorfville.cyclic.app/dashboard/counts")
      .then((response) => response.json())
      .then(setCounts)
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <Header />
      <Container>
        <Aside />
        <Main>
          <div className="md:grid grid-cols-12 gap-3">
            <div className="col-span-6 mb-4 md:mb-0">
              <div className="bg-white px-8  py-4 relative">
                <h3 className="font-semibold text-tertiary uppercase mb-10">
                  total posts
                </h3>
                <div className="icon bg-red-600 rounded-full my-5 w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 fill-white stroke-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-primary">{postCount}</h2>

                {/* overlay graph */}
                <div className="absolute bottom-0 right-0">
                  <img src={graph1} alt="" className=" opacity-30" />
                </div>
              </div>
            </div>
            <div className="col-span-6 mb-4 md:mb-0">
              <div className="bg-white px-8  py-4 relative">
                <h3 className="font-semibold text-tertiary uppercase mb-10">
                  total farm visit request
                </h3>
                <div className="icon bg-blue-600 rounded-full my-5 w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 fill-white stroke-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-primary">
                  {farmVisitCount}
                </h2>

                {/* overlay graph */}
                <div className="absolute bottom-0 right-0">
                  <img src={graph2} alt="" />
                </div>
              </div>
            </div>
            <div className="col-span-6 mb-4 md:mb-0">
              <div className="bg-white px-8  py-4 relative">
                <h3 className="font-semibold text-tertiary uppercase mb-10">
                  total cvs
                </h3>
                <div className="icon bg-slate-600 rounded-full my-5 w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 fill-white stroke-slate-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-primary">
                  {careerCount}
                </h2>

                {/* overlay graph */}
                <div className="absolute bottom-0 right-0">
                  <img src={graph3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Main>
      </Container>
    </>
  );
};

export default Dashboard;
