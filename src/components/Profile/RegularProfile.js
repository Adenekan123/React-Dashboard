import React from "react";
import { useSelector } from "react-redux";

const RegularProfile = ({ component: Component, userid }) => {
  const { users } = useSelector((store) => store.users);

  const person = users.find((user) => user._id === userid);

  return <Component {...person} />;
};

export default RegularProfile;
