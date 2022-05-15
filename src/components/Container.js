import React from "react";

export const Container = ({ children }) => {
  const [firstchild, lastchild] = children;

  return (
    <div className="lg:grid grid-cols-12 page-wrapper">
      {firstchild}
      {lastchild}
    </div>
  );
};
