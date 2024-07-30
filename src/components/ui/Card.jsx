import React from 'react'

function Card({children}) {
    // shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
    // shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)]
    // flat : -23px 23px 41px #a8a8a8,23px -23px 41px #ffffff;
    // concave : 
    // convex :
    // pressed: inset -23px 23px 41px #a8a8a8, inset 23px -23px 41px #ffffff;
  return (
    <div className='p-3 min-w-min bg-zinc-700 rounded-xl hover:rounded-2xl  transition-all  '>
        {children}
    </div>
  )
}

export default Card