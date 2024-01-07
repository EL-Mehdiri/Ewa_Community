import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <div className="text-red-700 bg-red-300 pl-2 rounded-l font-semibold">
      {error}
    </div>
  );
};

export default ErrorMessage;
