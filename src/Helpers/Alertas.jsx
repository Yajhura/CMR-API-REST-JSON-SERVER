import React from 'react'

const Alertas = ({children}) => {
  return (
    <div className=' bg-red-300 text-red-600 text-center font-bold  p-2 uppercase'>
     {children}
    </div>
  )
}

export default Alertas