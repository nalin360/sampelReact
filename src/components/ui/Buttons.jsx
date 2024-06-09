import React, { Children } from 'react'

function Buttons({
    children, 
    disabled,
    type,
    onClick
}) {

    const buttonClass = `px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50  inline-block text-purple-600 `

    const buttonSpanClass= `absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90  `
    return (

        <button 
        disabled={disabled}
        type={type}
        onClick={onClick}

        className={buttonClass}>
        <span className={buttonSpanClass}></span>
        <span className="relative group-hover:text-white">
        {children}
        </span>
        </button>
    )
}

export default Buttons