/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const customStyles = {
  content: {
    // top: '50%',
    // left: '50%',
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-50%',
    // transform: 'translate(-300px, 30px)',
  },
};

const EditProperty = ({
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
      img_url: property.img_url,
      image1: property.image1,
      image2: property.image2,
      union_ward: data.union,
      village: data.village,
      user: property.user,
    };

    axios
      .put(
        `https://property-exhibition.onrender.com/property/${id}/`,
        updateProperty
      )
      .then(res => {
        reset();
        closeModal();
        getProperty();
        refetch();
        toast.success("Successfully Property Updated!");
      })
      .catch(error => {
        console.error("An error occurred:", error);
        toast.success("Successfully Property Updated!");
      });
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="updateModal updateModal-2 "
      >
        <div className="grid justify-center mt-5 ">
          <p
            onClick={closeModal}
            className="text-right mt-3 font-bold text-crimson cursor-pointer"
          >
            Closed
          </p>
          {/* Col */}
          <div className="w-full bg-white rounded-lg lg:rounded-l-none ">
            <h3 className="text-2xl text-center">Update Property</h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="pb-4 mb-4 bg-white rounded"
            >
              <div className="">
                <label
                  className="block mb-1 text-sm font-bold text-gray-700"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  className="w-full px-3 py-2 mb-1 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="title"
                  type="text"
                  defaultValue={property.title}
                  {...register("title", { required: true })}
                  aria-invalid={errors.title ? "true" : "false"}
                />
              </div>
              <div className="mb-2 flex gap-2">
                <div className="mb-2 md:mr-2 md:mb-0">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="urpose"
                  >
                    Purpose
                  </label>
                  <select
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="purpose"
                    type="text"
                    defaultValue={property.purpose}
                    {...register("purpose", { required: true })}
                    aria-invalid={errors.purpose ? "true" : "false"}
                  >
                    <option value="Buy">Buy</option>
                    <option value="Rent">Rent</option>
                  </select>
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="area"
                  >
                    Area
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="area"
                    type="text"
                    defaultValue={property.area}
                    {...register("area", { required: true })}
                    aria-invalid={errors.area ? "true" : "false"}
                  />
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="price"
                  >
                    Price
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="price"
                    type="number"
                    defaultValue={property.price}
                    {...register("price", { required: true })}
                    aria-invalid={errors.price ? "true" : "false"}
                  />
                </div>
              </div>

              <div className="mb-2 flex gap-2">
                <div className="mb-2 md:mr-2 md:mb-0">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="status"
                  >
                    Status
                  </label>
                  <select
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="status"
                    type="text"
                    defaultValue={property.status}
                    {...register("status", { required: true })}
                    aria-invalid={errors.status ? "true" : "false"}
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
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="area"
                    type="text"
                    defaultValue={property.completion}
                    {...register("completion", { required: true })}
                    aria-invalid={errors.completion ? "true" : "false"}
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
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="type"
                    type="text"
                    defaultValue={property.type}
                    {...register("type", { required: true })}
                    aria-invalid={errors.type ? "true" : "false"}
                  >
                    <option value="House">House</option>
                    <option value="Apartment">Apartment</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block mb-1 text-sm font-bold text-gray-700"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="description"
                  type="text"
                  defaultValue={property.description}
                  {...register("description", { required: true })}
                  aria-invalid={errors.description ? "true" : "false"}
                ></textarea>
              </div>
              <div className="mb-2 flex gap-2">
                <div className="mb-2 md:mr-2 md:mb-0">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="division"
                  >
                    Division
                  </label>
                  <select
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="division"
                    type="text"
                    defaultValue={property.division}
                    {...register("division", { required: true })}
                    aria-invalid={errors.division ? "true" : "false"}
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
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="district"
                    type="text"
                    defaultValue={property.district}
                    {...register("district", { required: true })}
                    aria-invalid={errors.district ? "true" : "false"}
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
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="upozila"
                    type="text"
                    defaultValue={property.upozila}
                    {...register("upozila", { required: true })}
                    aria-invalid={errors.upozila ? "true" : "false"}
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
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="union_ward"
                    type="text"
                    defaultValue={property.union_ward}
                    {...register("union", { required: true })}
                    aria-invalid={errors.union_ward ? "true" : "false"}
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
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="village"
                    type="text"
                    defaultValue={property.village}
                    {...register("village", { required: true })}
                    aria-invalid={errors.village ? "true" : "false"}
                  />
                </div>
              </div>
              <div className="mb-6 text-center">
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

export default EditProperty;
