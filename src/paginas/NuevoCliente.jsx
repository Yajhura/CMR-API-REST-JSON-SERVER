import React from 'react'
import Formulario from '../components/Formulario'


function NuevoCliente() {
  return (
      <> 
         <h1 className='uppercase text-4xl p-5 bg-purple-100 w-3/4 md:w-2/4 text-2 font-black text-center mx-auto'>Nuevo Cliente</h1>
         
         <div>
            <Formulario/>
         </div>
      </>
     
  )
}

export default NuevoCliente