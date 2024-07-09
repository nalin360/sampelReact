import React from 'react'

function Inputss({
    label,
    className,
    type,
    onChange,
    placeholder,
    value,
    disabled,
    max,
    min,
    step,
    readOnly,
    // props

}) {
    return (
        <>
            <div className=''>
      
                    <input
                        
                        type={type}
                        className={
                            type === 'file'
                            ? `w-64 pl-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500  outline-none file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-600 file:text-gray-200`
                            
                            : `@apply bg-gray-e0 shadow-inset-shadoww-64 py-2 pl-2  rounded-lg focus:outline-none focus:border-blue-500 text-gray-700 \
                            `
                            }
                        aria-label={label}
                        tabIndex={0}
                        onChange={onChange}
                        placeholder={placeholder}
                        value={value}
                        disabled={disabled}
                        accept=".csv"
                        min={min}
                        max={max}
                        step={step}
                        readOnly={readOnly}
                        required
                        // {...props}
                    />
              
            </div>

        </>

    )
}

export default Inputss;