import { useRef } from "react";

const Test = () => {
  let myref = useRef();
  const updateRef = () => {
    // myref.current.innerText='Update Welcome'
    myref.current.innerHTML = "<lu><li>Name</li><li>Address</li></lu>";
  };
  const updateRefer = () => {
    // there is no Current property call
    myref.innerHTML = "<lu><li>Name</li><li>Address</li></lu>";
  };
  return (
    <div>
      <h1 ref={myref}></h1>
      <button onClick={updateRef}>Update</button>
      <h2 ref={h2 => (myref = h2)}></h2>
      <button onClick={updateRefer}>Update Second way</button>
    </div>
  );
};
export default Test;
