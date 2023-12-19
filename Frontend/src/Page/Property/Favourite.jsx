/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import useFavourite from "../../hooks/useFavourite";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Favourite = ({ property, user }) => {
  const token = localStorage.getItem("token");
  const { favouriteData, refetch } = useFavourite();
  const navigate = useNavigate();

  const userid = localStorage.getItem("user_id");
  const user_id = parseInt(userid);

  const propertyWiseFavourite = favouriteData.filter(
    favourite => favourite.property === parseInt(property)
  );
  const checkByPropertyId = propertyWiseFavourite.filter(
    favourite => favourite.user === user_id
  );

  const makeFavourite = () => {
    if (token) {
      const favouriteProperty = {
        user,
        property,
      };
      axios
        .post(
          "https://property-exhibition.onrender.com/favourite/?format=json",
          favouriteProperty
        )
        .then(response => {
          toast.success("Successfuly like");
          refetch();
        })
        .catch(error => {
          console.error("An error occurred:", error);
          toast.error("You Have to Login");
        });
    } else {
      toast.error("You Have to Login");
      navigate("/login");
    }
  };

  const Unfavourite = id => {
    console.log(id);
    if (token) {
      axios
        .delete(`https://property-exhibition.onrender.com/favourite/${id}/`)
        .then(res => {
          toast.success("Successfully Dislike");
          refetch();
        });
    } else {
      toast.error("You Have to Login");
    }
  };

  return (
    <div className="mt-2">
      {checkByPropertyId.length > 0 ? (
        <button
          onClick={() => Unfavourite(checkByPropertyId[0].favourite_id)}
          type="button"
          className="px-3 py-2  rounded bg-blue-500 hover:bg-red-500 text-white"
        >
          <i className="fa-solid fa-heart"></i>
        </button>
      ) : (
        <button
          onClick={makeFavourite}
          type="button"
          className="px-3 py-2 rounded bg-blue-500 hover:bg-red-500 text-white"
        >
          <i className="fa-regular fa-heart"></i>
        </button>
      )}
      {
        <span className="pl-2 text-gray-500">
          <b>{propertyWiseFavourite.length}</b> Likes{" "}
        </span>
      }
    </div>
  );
};

export default Favourite;

// const userWiseFavourite = favouriteData.filter(favourite => favourite.user === user_id)
