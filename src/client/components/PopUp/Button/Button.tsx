import * as React from 'react';

export const Button = (props) => {
  const { label, className, handleClick } = props;

  return (
    <>
      <button className={className} onClick={handleClick}>
        {label}
      </button>
    </>
  );
};
