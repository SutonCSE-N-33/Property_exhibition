/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import useBookings from "../../../hooks/useBookings";
import PaymentSuccess from "./PaymentSuccess";
import CancelBooking from "./CancelBooking";

const Order = () => {
  const { bookings, isLoaded } = useBookings();
  const userid = localStorage.getItem("user_id");
  const user = parseInt(userid);
  const userWiseBookings = bookings.filter(booking => booking.user === user);
  const completedBookings = userWiseBookings.filter(
    item => item.payment_status === "Completed"
  );
  const pendingdBookings = userWiseBookings.filter(
    item => item.payment_status === "Pending"
  );

  const bkinfo = JSON.stringify(completedBookings);
  localStorage.setItem("bkinfo", bkinfo);
  return (
    <div className="mb-10">
      <PaymentSuccess
        completedBookings={completedBookings}
        isLoaded={isLoaded}
      />
      <CancelBooking pendingdBookings={pendingdBookings} isLoaded={isLoaded} />
    </div>
  );
};

export default Order;
