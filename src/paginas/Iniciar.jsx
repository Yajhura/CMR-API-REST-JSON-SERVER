import { useState, useEffect } from "react";
import Cliente from "../components/Cliente";
const Iniciar = () => {
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    const obtenerClientesApi = async () => {
      try {
        const url = "http://localhost:4000/clientes";
        const resp = await fetch(url);
        const data = await resp.json();
        setClientes(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerClientesApi();
  }, []);

    const handleEliminar = async id=>{
      if (confirm("Seguro que quieres eliminar este registro?")) {
        console.log("Eliminando");
        try {
          const url = `http://localhost:4000/clientes/${id}`;
          const request = await fetch(url, { method: "DELETE" });
          await request.json();
          const arrayFilter = clientes.filter(cls => cls.id !== id)
          setClientes(arrayFilter)
        } catch (error) {
          console.log(error);
        }
      }
    };
  
    
  return (
    <div className="container flex justify-center mx-auto">
      <div className="flex flex-col">
        <div className="w-full">
          <div className="border-b border-gray-200 shadow">
            <table className="divide-y divide-gray-30">
              <thead className="bg-gray-50">
                <tr className="">
                  <th className="px-6 py-2 text-md text-gray-500">ID</th>
                  <th className="px-6 py-2 text-md text-gray-500">Nombre</th>
                  <th className="px-6 py-2 text-md text-gray-500">Empresa</th>
                  <th className="px-6 py-2 text-md text-gray-500">Email</th>
                  <th className="px-6 py-2 text-md text-gray-500">Telefono</th>
                  <th className="px-6 py-2 text-md text-gray-500">Ver</th>
                  <th className="px-6 py-2 text-md text-gray-500">Editar</th>
                  <th className="px-6 py-2 text-md text-gray-500">Eliminar</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-300">
                {clientes.map((cliente) => (
                  <Cliente key={cliente.id} cliente={cliente} 
                   handleEliminar={handleEliminar}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iniciar;
