import React from "react";
import "./possibility.css";

const Possibility = ({ data, head }) => {
  return (
    <div className="">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-md bg-gray-800">
        <thead className="text-left border-b bg-gray-700">{head}</thead>
        <tbody className="font-light">{data}</tbody>
      </table>
    </div>
  );
};

export default Possibility;
