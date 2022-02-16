import React from "react";
import { useNavigate } from "react-router-dom";

const Cliente = ({ cliente,handleEliminar }) => {
  const { id,nombre, empresa,email,telefono,notas } = cliente;
   const navigate = useNavigate()
  return (
    <>
      <tr  className="whitespace-nowrap hover:bg-gray-200 ">
        <td className="px-6 py-4 text-md text-gray-500">{id}</td>
        <td className="px-6 py-4">
          <div className="text-md text-gray-500">{nombre}</div>
        </td>
        <td className="px-6 py-4">
          <div className="text-md text-gray-500">{empresa}</div>
        </td>
        <td className=" py-4 text-md text-gray-500">{email}</td>
        <td className="px-6 py-4 text-md text-gray-500">{telefono}</td>
        <td className="px-6 py-4">
          <a onClick={()=>navigate(`/clientes/${id}`)} className="px-4 py-1 text-md text-white bg-blue-400 rounded cursor-pointer">
            Ver
          </a>
        </td>
        <td className="px-6 py-4">
          <a  onClick={()=>navigate(`/clientes/editar/${id}`)} href="#" className="px-4 py-1 text-md text-white bg-blue-400 rounded">
            Editar
          </a>
        </td>
        <td className="px-6 py-4">
          <a onClick={()=>handleEliminar(id)} href="#" className="px-4 py-1 text-md text-white bg-red-400 rounded">
            Eliminar
          </a>
        </td>
      </tr>
    </>
  );
};

export default Cliente;
