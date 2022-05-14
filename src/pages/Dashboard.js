import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//slices
import { calculateTotal, totalUsers } from "../features/user/usersSlice";

//components
import { Header } from "../components/Header";
import { Aside } from "../components/Aside";
import { Main } from "../components/Main";
import { Container } from "../components/Container";

import graph1 from "../graph1.png";
import graph2 from "../graph2.png";
import graph3 from "../graph3.png";
import graph4 from "../graph4.png";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalUsers());
    dispatch(calculateTotal({ field: "suspended", type: "totalSuspended" }));
    dispatch(calculateTotal({ field: "dailyExp", type: "totalDailyExp" }));
    dispatch(calculateTotal({ field: "weeklyExp", type: "totalWeeklyExp" }));
    dispatch(calculateTotal({ field: "monthlyExp", type: "totalMonthlyExp" }));
    dispatch(calculateTotal({ field: "yearlyExp", type: "yearlyExp" }));
  }, [dispatch]);

  const {
    totalDailyExp,
    totalWeeklyExp,
    totalMonthlyExp,
    yearlyExp,
    totalRegistered,
    totalSuspended,
  } = useSelector((store) => store.users);
  return (
    <>
      <Header />
      <Container>
        <Aside />
        <Main>
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-6">
              <div className="bg-white px-8  py-4 relative">
                <h3 className="font-semibold text-tertiary uppercase mb-10">
                  total daily expenses
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
                <h2 className="text-2xl font-bold text-primary">
                  ${totalDailyExp}
                </h2>

                {/* overlay graph */}
                <div className="absolute bottom-0 right-0">
                  <img src={graph1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="bg-white px-8  py-4 relative">
                <h3 className="font-semibold text-tertiary uppercase mb-10">
                  weekly earnings
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
                  ${totalWeeklyExp}
                </h2>

                {/* overlay graph */}
                <div className="absolute bottom-0 right-0">
                  <img src={graph2} alt="" />
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="bg-white px-8  py-4 relative">
                <h3 className="font-semibold text-tertiary uppercase mb-10">
                  Monthly expenses
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
                  ${totalMonthlyExp}
                </h2>

                {/* overlay graph */}
                <div className="absolute bottom-0 right-0">
                  <img src={graph3} alt="" />
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="bg-white px-8  py-4 relative">
                <h3 className="font-semibold text-tertiary uppercase mb-10">
                  Yearly Savings
                </h3>
                <div className="icon bg-green-600 rounded-full my-5 w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 fill-white stroke-green-600"
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
                  ${yearlyExp}
                </h2>

                {/* overlay graph */}
                <div className="absolute bottom-0 right-0">
                  <img src={graph4} alt="" />
                </div>
              </div>
            </div>
            <div className="col-start-1 col-end-6">
              <div className="bg-white px-8  py-4 relative">
                <h3 className="font-semibold text-tertiary uppercase mb-10">
                  total number of registered users
                </h3>
                <div className="flex justify-between items-center mt-5">
                  <div className="icon grow border-r border-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-24 w-24 fill-orange-500 stroke-orange-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-primary grow text-right">
                    {totalRegistered}
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-start-6 col-end-11">
              <div className="bg-white px-8  py-4 relative">
                <h3 className="font-semibold text-tertiary uppercase mb-10">
                  total number of suspended users
                </h3>
                <div className="flex justify-between items-center mt-5">
                  <div className="icon grow border-r border-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-24 w-24 fill-red-500 stroke-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-primary grow text-right">
                    {totalSuspended}
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-start-11 col-end-13">
              <div className="bg-white px-8  py-4 relative text-center">
                <h3 className="font-semibold text-tertiary uppercase mb-10">
                  admin profile
                </h3>
                <div className="icon mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
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
