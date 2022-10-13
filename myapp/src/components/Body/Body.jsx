import React from "react";

const Body = ({ eachContact, onClickDelete }) => {
  return (
    <tr>
      <td>{eachContact.first}</td>
      <td>{eachContact.last}</td>
      <td>{eachContact.phone}</td>
      <td>
        <button
          type="button"
          onClick={(event) => onClickDelete(event, eachContact.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Body;
