import React from 'react'
import "../styles/spinner.css"
const Spinner = () => {
  return (
   <div className='w-full flex justify-center mx-auto'>
      <div className="lds-hourglass"></div>
   </div>
  )
}

export default Spinner