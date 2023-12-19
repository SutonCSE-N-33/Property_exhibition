/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const UserEditProperty = ({
  setIsOpen,
  modalIsOpen,
  property,
  getProperty,
  refetch,
}) => {
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
    const id = property.id;
    const updateProperty = {
      title: data.title,
      area: data.area,
      price: data.price,
      description: data.description,
      type: data.type,
      purpose: data.purpose,
      completion: data.completion,
      status: data.status,
      division: data.division,
      district: data.district,
      upozila: data.upozila,
      img_url: data.img,
      union_ward: data.union,
      village: data.village,
    };

    axios
      .put(
        `https://property-exhibition.onrender.com/property/${id}/`,
        updateProperty
      )
      .then(res => {
        if (res.status === 200) {
          reset();
          closeModal();
          getProperty();
          refetch();
          toast.success("Successfully Property Updated!");
        } else {
          toast.error("Failed to Update Property!");
        }
      })
      .catch(error => {
        // console.error('An error occurred:', error);
        // toast.success('Successfully Property Updated! form warning................................')
      });
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="updateModal updateModal-2  mt-5"
      >
        <div className="grid justify-center justify-items-center">
          <p
            onClick={closeModal}
            className="text-right mt-3 font-bold text-crimson cursor-pointer"
          >
            Closed
          </p>
          <div className="w-full bg-white rounded-lg lg:rounded-l-none">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="pb-4 mb-4 bg-white rounded"
            >
              <div className="">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  className="md:w-full px-3 py-2 mb-1 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="title"
                  type="text"
                  aria-invalid={errors.title ? "true" : "false"}
                  defaultValue={property.title}
                  {...register("title", { required: true })}
                />
              </div>
              <div className="mb-2 md:flex gap-2">
                <div className="mb-2 md:mr-2 md:mb-0">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="area"
                  >
                    Area
                  </label>
                  <input
                    className="md:w-44 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="area"
                    type="text"
                    aria-invalid={errors.area ? "true" : "false"}
                    defaultValue={property.area}
                    {...register("area", { required: true })}
                  />
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="urpose"
                  >
                    Purpose
                  </label>
                  <select
                    className="md:w-40 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="purpose"
                    type="text"
                    aria-invalid={errors.purpose ? "true" : "false"}
                    defaultValue={property.purpose}
                    {...register("purpose", { required: true })}
                  >
                    <option value="Buy">Buy</option>
                    <option value="Rent">Rent</option>
                  </select>
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="price"
                  >
                    Price
                  </label>
                  <input
                    className="w-44 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="price"
                    type="number"
                    aria-invalid={errors.price ? "true" : "false"}
                    defaultValue={property.price}
                    {...register("price", { required: true })}
                  />
                </div>
              </div>

              <div className="mb-2 md:flex gap-2">
                <div className="mb-2 md:mr-2 md:mb-0">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="status"
                  >
                    Status
                  </label>
                  <select
                    className="w-40 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="status"
                    type="text"
                    aria-invalid={errors.status ? "true" : "false"}
                    defaultValue={property.status}
                    {...register("status", { required: true })}
                  >
                    <option value="Available">Available</option>
                    <option value="Booked">Booked</option>
                  </select>
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="area"
                  >
                    Completion
                  </label>
                  <select
                    className="w-44 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="area"
                    type="text"
                    aria-invalid={errors.completion ? "true" : "false"}
                    defaultValue={property.completion}
                    {...register("completion", { required: true })}
                  >
                    <option value="Ready">Ready</option>
                    <option value="Under Construction">
                      Under Construction
                    </option>
                    <option value="Unready">Unready</option>
                  </select>
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="type"
                  >
                    Type
                  </label>
                  <select
                    className="w-44 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="type"
                    type="text"
                    aria-invalid={errors.type ? "true" : "false"}
                    defaultValue={property.type}
                    {...register("type", { required: true })}
                  >
                    <option value="House">House</option>
                    <option value="Apartment">Apartment</option>
                  </select>
                </div>
              </div>
              <div className="mb-2">
                <label
                  className="block mb-1 text-sm font-bold text-gray-700"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  className="md:w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="description"
                  type="text"
                  aria-invalid={errors.description ? "true" : "false"}
                  defaultValue={property.description}
                  {...register("description", { required: true })}
                ></textarea>
              </div>
              <div className="mb-2 md:flex gap-2">
                <div className="mb-2 md:mr-2 md:mb-0">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="division"
                  >
                    Division
                  </label>
                  <select
                    className="w-40 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="division"
                    type="text"
                    aria-invalid={errors.division ? "true" : "false"}
                    defaultValue={property.division}
                    {...register("division", { required: true })}
                  >
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Barishal">Barishal</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Mymensingh">Mymensingh</option>
                  </select>
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="district"
                  >
                    District
                  </label>
                  <input
                    className="w-40 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="district"
                    type="text"
                    aria-invalid={errors.district ? "true" : "false"}
                    defaultValue={property.district}
                    {...register("district", { required: true })}
                  />
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="upozila"
                  >
                    Upozila
                  </label>
                  <input
                    className="w-48 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="upozila"
                    type="text"
                    aria-invalid={errors.upozila ? "true" : "false"}
                    defaultValue={property.upozila}
                    {...register("upozila", { required: true })}
                  />
                </div>
              </div>
              <div className="mb-2 flex gap-2">
                <div className="mb-2 md:mr-2 md:mb-0">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="union_ward"
                  >
                    Union/Ward No
                  </label>
                  <input
                    className="w-52 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="union_ward"
                    type="text"
                    aria-invalid={errors.union_ward ? "true" : "false"}
                    defaultValue={property.union_ward}
                    {...register("union", { required: true })}
                  />
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="village"
                  >
                    Village
                  </label>
                  <input
                    className="w-52 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="village"
                    type="text"
                    aria-invalid={errors.village ? "true" : "false"}
                    defaultValue={property.village}
                    {...register("village", { required: true })}
                  />
                </div>
              </div>
              <div className="my-4 text-center">
                <button className=" px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                  <input type="submit" value="Update Poperty" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UserEditProperty;
