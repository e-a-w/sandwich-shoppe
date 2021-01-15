import React from "react";

const Notes = ({ notes }) => {
  return (
    <div className="d-flex flex-column">
      <h5>📝 Notes: </h5>
      <p>{notes}</p>
    </div>
  );
};

export default Notes;
