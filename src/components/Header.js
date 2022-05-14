import React from "react";
import logo from "../logo.svg";

export const Header = () => {
  return (
    <header className=" bg-white">
      <div className="grid grid-cols-12 items-center px-12 py-5 h-full">
        <div className="brand capitalize font-bold text-lg text-left text-primary col-span-2">
          <span className="block">logo</span>
        </div>

        <div className="col-span-10 flex justify-between items-center">
          <span className="page-title capitalize text-base font-semibold text-tertiary">
            my client
          </span>
          <div className="right-side flex items-center">
            {/* user avatar image */}
            <div className="mr-12">
              <img
                src={logo}
                alt="user-avatar"
                className="w-9 h-9 rounded-full border object-cover bg-gray-800"
              />
            </div>
            {/*notitfication button*/}
            <button className="cursor-pointer mx-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            {/*Logout button*/}
            <button className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
