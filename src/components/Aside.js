import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Aside = () => {
  const { isOpen } = useSelector((store) => store.menu);
  return (
    <div className={`col-span-2 ${isOpen ? "block" : "hidden"}  md:block`}>
      <ul className="bg-primary text-secondary px-4 lg:px-8 py-8 md:py-3 lg:py-8 h-full sticky top-0 md:flex md:items-center lg:items-start md:justify-center lg:justify-start gap-7 lg:block ">
        <li className="mb-6 md:mb-0 lg:mb-6">
          <Link className="dropdown flex items-center" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="mb-6 md:mb-0 lg:mb-6">
          <Link className="dropdown flex items-center" to="/users">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <span>Users</span>
          </Link>
        </li>
        <li className="mb-6 md:mb-0 lg:mb-6">
          <Link className="flex" to="/profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-4"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
            <div to="#">Admin profile</div>
          </Link>
        </li>
        <li>
          <button className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-4"
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
            <div to="#">Logout</div>
          </button>
        </li>
      </ul>
    </div>
  );
};
