import React from "react";

export const Main = ({ children }) => {
  return (
    <>
      <div className="col-span-10">
        <div className="bg-secondary p-9 h-full">{children}</div>
      </div>
    </>
  );
};
