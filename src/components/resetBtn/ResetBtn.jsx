import React from "react";

const ResetBtn = ({ resetAmount }) => {
  return (
    <div className="button-control">
      <button className="btn btn-reset" onClick={resetAmount}>
        RESET
      </button>
    </div>
  );
};

export default ResetBtn;
