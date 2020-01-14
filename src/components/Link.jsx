import React from "react";

const Link = ({ text, author }) => {
  return (
    <h1 className='link'>
      <a href='facebook.com' className='fa fa-facebook'>
        {" "}
      </a>
      {"       "}
      <a
        className='fa fa-twitter'
        href={`https://twitter.com/intent/tweet?text=${text}${author}`}
      >
        {" "}
      </a>
    </h1>
  );
};

export default Link;
