import React, { useState } from 'react'

function RangeSlider({
    value,
    onChange,
    min,
    max,
    step=1,

}) {
   
  return (
    <>
    <p>value :{value}</p>
    <input  className=''
    type='range' value={value} id='range' 
    onChange={onChange} 
    min={min}
    max={max}
    step={step}
    />
    </>
  )
}

export default RangeSlider