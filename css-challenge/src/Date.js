import React from 'react';

const DateNow = () => {
  const date = new Date();
  return <span className="date">{date.toDateString()}</span>;
};

export default DateNow;
