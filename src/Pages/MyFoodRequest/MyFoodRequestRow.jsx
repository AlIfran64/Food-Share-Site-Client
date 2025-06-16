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

  const cellStyle = "py-3 px-4 border-b whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px]";

  return (
    <tr className="align-middle">
      <td className="py-3 px-4 border-b">
        <img
          src={foodImage}
          alt="food"
          className="w-14 h-14 object-cover rounded mx-auto"
        />
      </td>
      <td className={cellStyle} title={foodName}>{foodName}</td>
      <td className={cellStyle} title={_id}>{_id}</td>
      <td className={cellStyle} title={foodDonarName}>{foodDonarName}</td>
      <td className={cellStyle} title={foodDonarEmail}>{foodDonarEmail}</td>
      <td className={cellStyle} title={requestedBy}>{requestedBy}</td>
      <td className={cellStyle} title={requestDate}>{requestDate}</td>
      <td className={cellStyle} title={expiredDate}>{expiredDate}</td>
      <td className={cellStyle} title={pickupLocation}>{pickupLocation}</td>
      <td className={cellStyle + " text-center capitalize"} title={foodStatus}>{foodStatus}</td>
      <td className={cellStyle} title={additionalNotes}>{additionalNotes}</td>
    </tr>
  );
};

export default MyFoodRequestRow;
