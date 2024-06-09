import React from 'react';

const CustomSelect = ({
  value,
  onChange,
  options,
  placeholder = '',
}) => {
  return (
    <div className="custom-select">
      <select
      className='bg-gray-700 border-none text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none'
      value={value} onChange={onChange}>
        
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <i className="fa fa-chevron-down" />
    </div>
  );
};

export default CustomSelect;
