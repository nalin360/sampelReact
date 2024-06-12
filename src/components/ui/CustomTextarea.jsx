// CustomTextarea.js
import React from 'react';

const CustomTextarea = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
      <textarea 
      className='w-64 py-2 pl-2 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700 placeholder:text-gray-700'
      placeholder={placeholder} value={value} onChange={onChange} />
  );
};

export default CustomTextarea;
