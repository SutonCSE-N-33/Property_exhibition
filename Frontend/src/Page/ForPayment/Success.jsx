/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";

const Success = () => {
  const { tran_id } = useParams();
  return (
    <div>
      {/* <h1>Payment Success</h1> */}
      <h1 className="text-2xl font-bold text-center text-green-500">
        Congratulation
      </h1>
      <h1 className="text-6xl font-bold text-center text-green-500">
        Payment Success {tran_id}
      </h1>
    </div>
  );
};

export default Success;
