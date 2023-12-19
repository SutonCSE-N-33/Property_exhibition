/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import toast from "react-hot-toast";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-300px, 100px)",
  },
};

const MakeAdmin = ({ setIsOpen, modalIsOpen, user, getAllUsers }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  function closeModal() {
    setIsOpen(false);
  }

  const onSubmit = data => {
    const userProfile = {
      contact_no: user.contact_no,
      current_address: user.current_address,
      division: user.division,
      district: user.district,
      gender: user.gender,
      date_of_birth: user.date_of_birth,
      area: null,
      parmanent_address: null,
      profile_avatar: null,
      user: {
        first_name: user.user.first_name,
        last_name: user.user.last_name,
        email: user.user.email,
        username: user.user.username,
        is_staff: data.is_staff,
      },
    };

    const token = localStorage.getItem("token");
    const apiUrl = `https://property-exhibition.onrender.com/alluser/${user.id}/`;
    const axios_instance = axios.create({
      headers: {
        Authorization: `token ${token}`,
      },
    });
    axios_instance
      .put(apiUrl, userProfile)
      .then(response => {
        getAllUsers();
        reset();
        closeModal();
        toast.success("Successfully Status Updated!");
      })
      .catch(error => {
        console.error(error);
        toast.error("Failed to Status Update!");
      });
  };

  return (
    <div>
      <Modal
        className="updateModal updateModal-2"
        contentLabel="Example Modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="my-5">
          {/* Row */}
          <div className="grid justify-center item-center">
            {/* Col */}
            <div className="w-full bg-green-100 px-6 py-2 h-full rounded-lg lg:rounded-l-none">
              <div className="flex justify-between">
                <h3 className="pt-4 text-2xl text-center ml-16 text-gray-700">
                  {user.user !== undefined && user.user.is_staff
                    ? "Cancel Admin"
                    : "Create Admin"}
                </h3>
                <AiOutlineClose
                  onClick={closeModal}
                  className="text-gray-500 cursor-pointer font-bold text-4xl mt-2"
                />
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="pt-6  mb-4 rounded"
              >
                <div>
                  <p className="text-center text-gray-700 font-semibold">
                    {user.user !== undefined && user.user.is_staff
                      ? "Click on this check Box to Cancel Admin"
                      : "Click the check Box to Create Admin"}
                  </p>
                  <input
                    style={{ marginLeft: "117px" }}
                    className=" my-6 cursor-pointer px-2 py-2 mt-6"
                    type="checkbox"
                    defaultChecked={
                      user.user !== undefined && user.user.is_staff
                    }
                    {...register("is_staff")}
                  />
                </div>

                <div className=" text-center">
                  <button
                    className=" px-4 py-2 text-white bg-green-700 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    {user.user !== undefined && user.user.is_staff
                      ? "Cancel Admin"
                      : "Create Admin"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MakeAdmin;
