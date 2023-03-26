import React from "react";
import { Link } from "react-router-dom";

const Resetpassword = () => {
  return (
    <div className="h-screen w-100 bg-secondary flex justify-center items-center p-4 md:p-0">
      <div className="w-96">
        <div className="bg-white rounded shadow">
          <div className="card-header px-6 py-4 border-b">
            <h2 className="font-semibold text-gray-700 uppercase text-center">
              dashboard login
            </h2>
          </div>
          <div className="card-body p-6">
            <div className="mb-6">
              <label htmlFor="username" className="block mb-3 font-semibold">
                Email:
              </label>
              <input
                type="text"
                className=" w-full border rounded px-6 py-4"
                placeholder="Enter username"
              />
            </div>
            <div className=" mb-10">
              <label htmlFor="password" className="block mb-3 font-semibold">
                Password:
              </label>
              <input
                type="text"
                className=" w-full border rounded px-6 py-4"
                placeholder="Enter password"
              />
            </div>
            <div className="text-center">
              <button className="bg-primary hover:bg-gray-700 px-6 py-3 capitalize rounded font-medium text-white">
                Login
              </button>
            </div>
            <div className="flex justify-between items-center mt-10 text-sm text-gray-500">
              <Link to="#" className="hover:text-blue-700">
                forgot password
              </Link>
              <Link to="#" className="hover:text-blue-700">
                create a new account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resetpassword;
