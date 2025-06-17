import React from 'react';

const MyFoodRequestRow = ({ item }) => {
  const {
    foodImage,
    foodName,
    foodStatus,
    pickupLocation,
    _id,
    foodDonarName,
    foodDonarEmail,
    requestedBy,
    requestDate,
    expiredDate,
    additionalNotes
  } = item;

  const cellStyle = "py-3 px-4 border-b"; // removed text truncation styles

  return (
    <tr className="align-middle">
      <td className="py-3 px-4 border-b">
        <img
          src={foodImage}
          alt="food"
          className="w-14 h-14 object-cover rounded mx-auto"
        />
      </td>
      <td className={cellStyle}>{foodName}</td>
      <td className={cellStyle}>{_id}</td>
      <td className={cellStyle}>{foodDonarName}</td>
      <td className={cellStyle}>{foodDonarEmail}</td>
      <td className={cellStyle}>{requestedBy}</td>
      <td className={cellStyle}>{requestDate}</td>
      <td className={cellStyle}>{expiredDate}</td>
      <td className={cellStyle}>{pickupLocation}</td>
      <td className={`${cellStyle} text-center capitalize`}>{foodStatus}</td>
      <td className={cellStyle}>{additionalNotes}</td>
    </tr>
  );
};

export default MyFoodRequestRow;
