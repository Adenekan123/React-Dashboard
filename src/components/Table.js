import React from "react";
import TableItem from "./TableItem";

const Table = ({ data, headings }) => {
  return (
    <table className="table w-full border-collapse table-auto text-sm">
      <thead className="uppercase text-primary">
        <tr className="bg-white">
          {headings.map((heading) => (
            <th key={heading}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody className="capitalize text-center">
        {data.map((item, index) => (
          <TableItem key={item._id} index={index + 1} {...item} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
