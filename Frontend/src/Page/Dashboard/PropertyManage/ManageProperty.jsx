/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import AddProperty from "./AddProperty";
import axios from "axios";
import EditProperty from "./EditProperty";
import useProperty from "../../../hooks/useProperty";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
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

const ManageProperty = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [defaultProperty, setDefaultProperty] = useState(1);
  const { isLoaded, properties, refetch } = useProperty();
  const [modalIsOn, setIsOn] = useState(false);
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleEdit = property => {
    setIsOpen(true);
    setDefaultProperty(property);
  };

  const showingDeletion = () => {
    setMessage("Deleted Successfully");
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  function cancelModal() {
    setIsOn(false);
  }

  const makingDecisionYes = () => {
    axios
      .delete(`https://property-exhibition.onrender.com/property/${id}/`)
      .then(response => {
        if (response.status === 200) {
          toast.success("Successfully Remove Property!!");
          cancelModal();
          showingDeletion();
          refetch();
        } else {
          toast.error("Failed to Remove Property!");
        }
      })
      .catch(error => {
        console.error(error);
        toast.error("Failed to Remove Property!");
      });
  };

  const makingDecisionNo = () => {
    cancelModal();
    navigate("/dashboard/manageProperty");
  };

  const handleDelete = parseId => {
    setId(parseId);
    setIsOn(true);
  };

  // let propertiesJSON = localStorage.getItem("properties");
  // var properties  = JSON.parse(propertiesJSON);

  const { bookings } = useBookings();
  const bookedPropertyIds = bookings
    ?.filter(booking => booking?.payment_status === "Completed")
    .map(booking => booking?.property);
  const availableProperties = properties?.filter(
    property => !bookedPropertyIds?.includes(property.id)
  );
  return (
    <div>
      <div className="relative grid justify-center shadow-md sm:rounded-lg mb-10">
        <h1 className="-mt-6 text-2xl font-bold text-center text-red-700">
          {message}
        </h1>
        <h1 className="mb-3 mt-3 text-2xl font-bold text-gray-600 text-center">
          {" "}
          Property Information
        </h1>
        <p className="text-center">
          Total{" "}
          <span className="border border-green-500 p-1 text-extrabold ">
            {availableProperties?.length}
          </span>{" "}
          Properties Here
        </p>
        <table className="text-sm text-gray-500 dark:text-gray-400 mx-5">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-2 py-2">
                id
              </th>
              <th scope="col" className="px-2 py-2">
                Image
              </th>
              <th scope="col" className="px-2 py-2">
                Property Name
              </th>
              <th scope="col" className="px-2 py-2">
                Location
              </th>
              <th scope="col" className="px-2 py-2">
                Type
              </th>
              <th scope="col" className="px-2 py-2">
                sft Area
              </th>
              <th scope="col" className="px-2 py-2">
                Price
              </th>
              <th scope="col" className="px-2 py-2">
                Completion
              </th>
              <th scope="col" className="px-2 py-2">
                Purpose
              </th>
              <th scope="col" className="px-2 py-2">
                Status
              </th>
              <th scope="col" className="px-2 py-2">
                Actions
              </th>
            </tr>
          </thead>
          {!isLoaded ? (
            <tbody>
              {availableProperties?.map((property, index) => (
                <tr
                  className="bg-white border-b dark:bg-gray-600 dark:border-gray-700"
                  key={property.id}
                >
                  <td className="py-2 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                    {index + 1}
                  </td>
                  <td className="py-2 pr-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img
                      src={property.img_url}
                      loading="lazy"
                      className="rounded"
                      alt=""
                    />
                  </td>
                  <td className="py-2 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                    {property.title}
                  </td>
                  <td className="px-2 py-2">{property.district}</td>
                  <td className="px-2 py-2">{property.type}</td>
                  <td className="px-2 py-2">{property.area}</td>
                  <td className="px-2 py-2">${property.price}</td>
                  <td className="px-2 py-2">{property.completion}</td>
                  <td className="px-2 py-2">{property.purpose}</td>
                  <td className="px-2 py-2">{property.status}</td>
                  <td className="px-2 py-2">
                    <a
                      onClick={() => handleEdit(property)}
                      className="p-1.5 rounded cursor-pointer bg-green-600 text-white mx-2"
                    >
                      Edit
                    </a>
                    <a
                      onClick={() => handleDelete(property.id)}
                      className="p-1.5 rounded cursor-pointer bg-red-600 text-white"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <div role="status flex justify-center">
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
      <EditProperty
        properties={properties}
        refetch={refetch}
        property={defaultProperty}
        setIsOpen={setIsOpen}
        modalIsOpen={modalIsOpen}
      ></EditProperty>
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

export default ManageProperty;
