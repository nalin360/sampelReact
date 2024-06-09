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
                        // ref={inputref}
                        type={type}
                        
                        className={
                            type === 'file'
                            ? `block border border-gray-300 rounded-lg cursor-pointer bg-gray-700 border-none text-white text-sm  focus:ring-blue-500 focus:border-blue-500  w-full p-1.5 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-600 file:text-gray-200`
                            
                            : `block border border-gray-300 rounded-lg cursor-pointer bg-gray-700 border-none text-white text-sm  focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 outline-none`
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