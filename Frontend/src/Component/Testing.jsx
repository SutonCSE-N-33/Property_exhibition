/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ComponentToPrint from "./ComponentToPrint";

const Testing = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <h1 ref={componentRef}>Welcome to print</h1>
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

export default Testing;
