/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import Modal from "react-modal";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useBookings from "../../../hooks/useBookings";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(600px, 300px)",
  },
};
const CancelBooking = ({ isLoaded }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [bookid, setbookid] = useState();
  const [modalIsOn, setIsOn] = useState(false);

  const { bookings } = useBookings();
  const userid = localStorage.getItem("user_id");
  const user = parseInt(userid);
  const userWiseBookings = bookings.filter(booking => booking.user === user);
  const completedBookings = userWiseBookings.filter(
    item => item.payment_status === "Completed"
  );
  const pendingdBookings = userWiseBookings.filter(
    item => item.payment_status === "Pending"
  );
  console.log(pendingdBookings);
  const goToPayment = (property, user, booking_id) => {
    navigate(`/dashboard/payment/${user}/${property}/${booking_id}`);
  };

  const cancelBooking = id => {
    setbookid(id);
    setIsOn(true);
  };

  function cancelModal() {
    setIsOn(false);
  }
  const makingDecisionYes = () => {
    const apiUrl = `https://property-exhibition.onrender.com/bookings/${bookid}/?format=json`;
    const axios_instance = axios.create({
      headers: {
        Authorization: `token ${token}`,
      },
    });
    axios_instance
      .delete(apiUrl)
      .then(response => {
        cancelModal(false);

        toast.success("Successfully Remove Order!");
      })
      .catch(error => {
        // console.log(error)
        toast.error("Failed to Remove Order!");
      });
  };

  const makingDecisionNo = () => {
    cancelModal(false);
    navigate("/dashboard/booking");
  };

  return (
    <div>
      <div className="mt-5">
        <h3 className="text-2xl font-bold text-gray-600 pb-5">
          Pending Orders
        </h3>
        <table className="md:w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-2 py-2">
                Booking id
              </th>
              <th scope="col" className="px-2 py-2">
                Status
              </th>
              <th scope="col" className="px-2 py-2">
                Booking Date
              </th>
              <th scope="col" className="px-2 py-2">
                Total Amount
              </th>
              <th scope="col" className="px-2 py-2">
                User Id
              </th>
              <th scope="col" className="px-2 py-2">
                Property Id
              </th>
              <th scope="col" className="px-2 py-2">
                Action
              </th>
            </tr>
          </thead>

          {isLoaded ? (
            <tbody>
              {pendingdBookings?.map((book, id) => (
                <tr key={id} className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {book.booking_id}
                  </th>
                  <td className="px-2 py-2">{book.payment_status}</td>
                  <td className="px-2 py-2">{book.booking_date}</td>
                  <td className="px-2 py-2">${book.total_amount}</td>
                  <td className="px-2 py-2">{book.user}</td>
                  <td className="px-2 py-2">{book.property}</td>
                  <th></th>
                  <td className="px-2 py-2">
                    {book.payment_status == "Pending" ? (
                      <button
                        onClick={() => cancelBooking(book.booking_id)}
                        className="px-1.5 py-1 rounded bg-red-500 hover:bg-red-600 text-white"
                      >
                        Booking Cancel
                      </button>
                    ) : (
                      ""
                    )}
                  </td>
                  <td className="px-2 py-2">
                    {book.payment_status == "Pending" ? (
                      <button
                        onClick={() =>
                          goToPayment(book.property, book.user, book.booking_id)
                        }
                        className="px-1.5 py-1 rounded bg-blue-500 hover:bg-blue-700 text-white"
                      >
                        Go To Payment
                      </button>
                    ) : (
                      ""
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </table>
      </div>
      <Modal
        isOpen={modalIsOn}
        onRequestClose={cancelModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="updateModal updateModal-2"
      >
        <div className="bg-yellow-300 w-60 p-5 rounded">
          <h4 className="text-center text-white">Are you sure to Delete</h4>

          <div className="flex justify-between mt-10 ml-6">
            <button
              onClick={makingDecisionYes}
              className="p-2 bg-red-600 text-white rounded-lg ml-2 mr-10"
            >
              Yes
            </button>
            <button
              onClick={makingDecisionNo}
              className="p-2 ml-6 bg-green-400 text-white rounded-lg ml-2 mr-10"
            >
              No
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CancelBooking;
