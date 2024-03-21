import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // This will take the user back to the previous page in their history.
  };

  return (
    <button
      type="button"
      className="btn btn-light ml-5 mt-4"
      onClick={handleGoBack} style={{ backgroundColor:"rgb(127, 1, 75)",color:"#fff" }}
    >
      <i className="fa fa-arrow-circle-left mr-2" style={{ fontSize: "20px" }}></i>
      Back
    </button>
  );
}

export default BackButton;
