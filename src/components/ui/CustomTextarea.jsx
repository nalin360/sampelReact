// CustomTextarea.js
import React from 'react';

const CustomTextarea = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
      <textarea 
      className='bg-gray-700 border-none text-white text-sm rounded-lg focus:ring-blue-500
      placeholder:text-white focus:border-blue-500 block w-full p-2.5 outline-none'
      placeholder={placeholder} value={value} onChange={onChange} />
  );
};

export default CustomTextarea;
