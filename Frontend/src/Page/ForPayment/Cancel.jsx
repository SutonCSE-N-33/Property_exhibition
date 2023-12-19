/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";

const Cancel = () => {
  const { tran_id } = useParams();
  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-red-300">
        Unfortunely
      </h1>
      <h1 className="text-6xl font-bold text-center text-red-300">
        Payment Cancel ! {tran_id}
      </h1>
    </div>
  );
};

export default Cancel;
