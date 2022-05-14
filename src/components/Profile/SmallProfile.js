import React from "react";
const SmallProfile = ({
  name,
  age,
  title,
  email,
  dailyExp,
  monthlyExp,
  yearlyExp,
  suspended,
}) => {
  return (
    <table className="table w-full border-collapse table-auto text-sm">
      <tbody className="capitalize text-left">
        <tr className="border-b">
          <th>Name:</th>
          <td>{name}</td>
        </tr>
        <tr className="border-b">
          <th>Age:</th>
          <td>{age}</td>
        </tr>
        <tr className="border-b">
          <th>Title:</th>
          <td>{title}</td>
        </tr>
        <tr className="border-b">
          <th>Email:</th>
          <td>{email}</td>
        </tr>
        <tr className="border-b">
          <th>Daily Expenses:</th>
          <td>{dailyExp}</td>
        </tr>
        <tr className="border-b">
          <th>Monthly Expenses:</th>
          <td>{monthlyExp}</td>
        </tr>
        <tr className="border-b">
          <th>Yearly Expenses:</th>
          <td>{yearlyExp}</td>
        </tr>
        <tr>
          <th>suspended:</th>
          <td>{suspended ? "Yes" : "No"}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SmallProfile;
