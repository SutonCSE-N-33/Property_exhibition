/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";

const Failed = () => {
  const { tran_id } = useParams();
  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-red-200 ">
        Sorry For
      </h1>
      <h1 className="text-6xl font-bold text-center text-red-200">
        Payment Failed{tran_id}
      </h1>
    </div>
  );
};

export default Failed;
