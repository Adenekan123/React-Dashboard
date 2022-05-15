import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../features/menu/menuSlice";

export const Main = ({ children }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="col-span-10" onClick={() => dispatch(toggleMenu())}>
        <div className="bg-secondary p-4 md:p-8 h-full">{children}</div>
      </div>
    </>
  );
};
