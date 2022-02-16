import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../Helpers/Error";

const EditarCliente = () => {
  const [cliente, setCliente] = useState({});
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
      {Object.keys(cliente).length === 0 ? null : (
        <h1 className="uppercase text-4xl p-5 bg-purple-100 w-3/4 md:w-2/4 text-2 font-black text-center mx-auto">
          Editar Cliente
        </h1>
      )}

      {cliente?.nombre ?  (
        <div>
          <Formulario cliente={cliente} cargando={cargando} />
        </div>
      ) : setTimeout(() => {
        <Error/>
      }, 1000) }
    </>
  );
};

export default EditarCliente;
