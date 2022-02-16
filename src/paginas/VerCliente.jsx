import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "../Helpers/Error";
import Spinner from "../Helpers/Spinner";

const VerCliente = () => {
  const [cliente, setCliente] = useState({});
  const { nombre, empresa, email, telefono, notas } = cliente;
  const [cargando, setCargando] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setCargando(!cargando);
    const obtenerClienteApi = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        setCliente(data);
      } catch (error) {
        console.log(error);
      }
      setCargando(false);
    };
    obtenerClienteApi();
  }, []);

  return (
    <>

      {cargando ? (
       <Spinner/>
      ) : (
        Object.keys(cliente).length === 0? <Error /> :(
          <>
          <h2 className="text-center text-2 font-black text-4xl my-10 uppercase">
            Informacion del Cliente
          </h2>
          <div className="bg-white border border-gray-400 shadow-2xl rounded-lg p-5 w-2/4 mx-auto">
            <p className="text-indigo-600 font-bold text-2xl my-5">
              ID:
              <span className="text-xl text-blue-500 font-semibold ml-3">
                {id}
              </span>
            </p>
            <p className="text-indigo-600 font-bold text-2xl my-5">
              Cliente:
              <span className="text-xl text-blue-500 font-semibold ml-3">
                {nombre}
              </span>
            </p>
            <p className="text-indigo-600 font-bold text-2xl my-5">
              Empresa:
              <span className="text-xl text-blue-500 font-semibold ml-3">
                {empresa}
              </span>
            </p>
            <p className="text-indigo-600 font-bold text-2xl my-5">
              Email:
              <span className="text-xl text-blue-500 font-semibold ml-3">
                {email}
              </span>
            </p>
            <p className="text-indigo-600 font-bold text-2xl my-3">
              Telefono:
              <span className="text-xl text-blue-500 font-semibold ml-3">
                {telefono}
              </span>
            </p>
            <p className="text-indigo-600 font-bold text-2xl my-5">
              Notas:
              <span className="text-xl text-blue-500 font-semibold ml-3">
                {notas}
              </span>
            </p>
          </div>
        </>
        )
       
      )}
    </>
  );
};

export default VerCliente;
