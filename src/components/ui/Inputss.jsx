import React from 'react'

function Inputss({
    label,
    className,
    
    type,
    onChange,
    placeholder,
    value,
    disabled,
    readOnly

}) {
    return (
        <>
            <div className=''>
      
                    <input
                        
                        type={type}
                        className={
                            type === 'file'
                            ? `w-64 py-2 pl-2 pr-4 border border-gray-300 rounded-lg focus:outline-none   focus:ring-blue-500 focus:border-blue-500 p-1.5 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-600 file:text-gray-200`
                            
                            : `w-64 py-2 pl-2 pr-4 border-2  border-gray-500 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700`
                            }
                        aria-label={label}
                        tabIndex={0}
                        onChange={onChange}
                        placeholder={placeholder}
                        value={value}
                        disabled={disabled}
                        accept=".csv"
                        readOnly={readOnly}
                        required
                    />
              
            </div>

        </>

    )
}

export default Inputss;