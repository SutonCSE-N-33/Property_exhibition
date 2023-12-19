/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { createContext, useState } from "react";
// import { RouterProvider} from 'react-router-dom'
// import Router from './Router/Router';
// import './index.css'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import Home from "../src/Page/Home/Home";
import Property from "../src/Page/Property/Property";
import Login from "../src/Page/Account/Login";
import Register from "../src/Page/Account/Register";
import DetailProperty from "../src/Page/Property/DetailProperty";
import AddPromotion from "./Page/Dashboard/Promotion/AddPromotion";
import AddTestmonial from "../src/Page/Dashboard/AddTestmonial";
import EditProfile from "./Page/Dashboard/Profile/EditProfile";
import ManageProperty from "./Page/Dashboard/PropertyManage/ManageProperty";
import UserProfile from "./Page/Dashboard/Profile/UserProfile";
import AllPromotion from "./Page/Dashboard/Promotion/AllPromotion";
import Navbar from "./Component/Navbar";
import Dashboard from "./Page/Dashboard/Dashboard";
import { PrivateOutlet } from "./Page/PrivateOutlet/PrivateOutlet";
import About from "./Page/About/About";
import Contact from "./Page/Contact/Contact";
import FavouriteList from "./Page/Dashboard/Profile/FavouriteList";
import AddProperty from "./Page/Dashboard/PropertyManage/AddProperty";
import ManageUsers from "./Page/Dashboard/Profile/ManageUsers";
import UserManageProperty from "./Page/Dashboard/PropertyManage/UserManageProperty";
import NotFound from "./Component/NotFound";
import Booking from "./Page/Dashboard/Booking/Booking";
import Payment from "./Page/Dashboard/Booking/Payment";
import { Toaster } from "react-hot-toast";
import Reports from "./Page/Dashboard/Reports";
import AllMessage from "./Page/Dashboard/AllMessage";
import Testing from "./Component/Testing";
import BuyingProperty from "./Page/Dashboard/Booking/BuyingProperty";

export const contextApi = createContext();
const queryClient = new QueryClient();
function App() {
  const [mode, setMode] = useState(false);

  const darkMode = () => {
    setMode(true);
  };

  const lightMode = () => {
    setMode(false);
  };
  return (
    <div
      className={`App container mx-auto px-4 ${mode === true ? "dark" : ""}`}
    >
      <QueryClientProvider client={queryClient}>
        <contextApi.Provider value={{ mode, setMode, darkMode, lightMode }}>
          {/* <RouterProvider router={Router}></RouterProvider> */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            {/* <Route path='/test' element={<Test />}></Route> */}
            <Route path="/testing" element={<Testing />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/property" element={<Property />}></Route>
            <Route path="/property/:id" element={<DetailProperty />}></Route>

            <Route path="*" element={<NotFound />}></Route>

            <Route path="/*" element={<PrivateOutlet></PrivateOutlet>}>
              <Route path="dashboard" element={<Dashboard />}>
                <Route index element={<UserProfile />} />
                {/* <Route path="userProfile" element={} /> */}
                <Route path="favouriteList" element={<FavouriteList />} />
                <Route path="editProfile" element={<EditProfile />} />
                <Route path="manageUsers" element={<ManageUsers />} />
                <Route path="addProperty" element={<AddProperty />} />
                <Route path="manageProperty" element={<ManageProperty />} />
                <Route
                  path="userManageProperty"
                  element={<UserManageProperty />}
                />
                <Route
                  path="all-Featured-property"
                  element={<AllPromotion />}
                />
                <Route path="add-Feature-property" element={<AddPromotion />} />
                <Route path="addTestimonial" element={<AddTestmonial />} />
                <Route path="booking" element={<Booking />} />
                <Route
                  path="booking/buying-property"
                  element={<BuyingProperty />}
                />
                <Route path="reports" element={<Reports />} />
                <Route path="allMessage" element={<AllMessage />} />
                <Route
                  path="payment/:user/:property/:booking_id"
                  element={<Payment />}
                />
              </Route>
            </Route>
          </Routes>
          <Toaster />
        </contextApi.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
// https://job.mediusware.com/job/software-engineer-intern-django/apply
