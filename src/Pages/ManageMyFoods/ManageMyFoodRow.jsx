import axios from 'axios';
import React from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const ManageMyFoodRow = ({ item }) => {
  const {
    foodImage,
    foodName,
    foodQuantity,
    foodStatus,
    pickupLocation,
    _id
  } = item;

  // HandleDelete
  const handleDelete = () => {
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
        axios.delete(`http://localhost:3000/shareFood/${_id}`, {
          data: item // this is the correct way to pass body data
        })
          .then(res => {
            console.log('Deleted:', res.data);
            Swal.fire({
              title: "Deleted!",
              text: "Your food item has been deleted.",
              icon: "success"
            });
          })
          .catch(err => {
            toast.error('Failed to delete');
            console.error(err);
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
      <td className="py-3 px-4 border-b text-center space-x-2">
        <Link to={`/updateFood/${_id}`}>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-3 py-1 rounded text-sm">
            Update
          </button>
        </Link>
        <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white px-3 font-semibold py-1 rounded text-sm">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageMyFoodRow;
