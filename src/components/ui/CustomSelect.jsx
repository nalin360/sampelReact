import React, { useMemo } from 'react';

const CustomSelect = ({
  value,
  onChange,
  options,
  placeholder = '',
  optionKeys
}) => {
  const memoizedOptions = useMemo(() => {
    return options.map((option) => (
      <option value={Object.values(option)} key={Object.values(option)}>
        {Object.values(option)}
      </option>
    ));
  }, [options]);
  return (
    <div className="custom-select">

      <select
        className='w-64 py-2 pl-2 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700 placeholder:text-gray-700'
        value={value} onChange={onChange}
        >

        <option key={0} value="">{placeholder}</option>
        {memoizedOptions}
      </select>

      <i className="fa fa-chevron-down" />
    </div>
  );
};

export default CustomSelect;
