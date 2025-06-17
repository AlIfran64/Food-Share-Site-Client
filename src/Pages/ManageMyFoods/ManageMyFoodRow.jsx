import axios from 'axios';
import React, { useContext } from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Components/Context/Authentication/AuthContext';

const ManageMyFoodRow = ({ item, food, setFood }) => {
  const { user } = useContext(AuthContext);
  const {
    foodImage,
    foodName,
    foodQuantity,
    foodStatus,
    pickupLocation,
    _id
  } = item;

  // HandleDelete
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // Axios DELETE with body
        axios.delete(`https://sharebite-server-coral.vercel.app/shareFood/${_id}`, {
          data: item,
          headers: {
            authorization: `Bearer ${user?.accessToken}`,
          }
        })
          .then(res => {
            Swal.fire({
              title: "Deleted!",
              text: "Your food item has been deleted.",
              icon: "success"
            });

            // remove item from state
            const remainingItems = food.filter((rem) => rem._id !== _id);
            setFood(remainingItems);

          })
          .catch(err => {
            toast.error('Failed to delete', err);
          });
      }
    });
  };

  return (
    <tr className="align-middle">
      <td className="py-3 px-4 border-b">
        <img
          src={foodImage}
          alt="image"
          className="w-14 h-14 object-cover rounded mx-auto"
        />
      </td>
      <td className="py-3 px-4 border-b">{foodName}</td>
      <td className="py-3 px-4 border-b text-center">{foodQuantity}</td>
      <td className="py-3 px-4 border-b">{pickupLocation}</td>
      <td className="py-3 px-4 border-b capitalize text-center">{foodStatus}</td>
      <td className="py-3 px-4 border-b text-center lg:space-x-2">
        <Link to={`/updateFood/${_id}`}>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-3 py-1 rounded text-sm">
            Update
          </button>
        </Link>
        <button onClick={() => handleDelete(_id)} className="bg-red-500 hover:bg-red-600 text-white px-3 font-semibold py-1 rounded text-sm mt-2 lg:mt-0">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageMyFoodRow;
