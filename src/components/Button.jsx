import React from "react";

const Button = ({ handleClick }) => {
  return (
    <>
      <button onClick={handleClick} className='button'>
        <h1>New Quote</h1>
      </button>
    </>
  );
};

export default Button;
