import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
const Default = () => {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

export default Default;
