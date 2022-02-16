import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alertas from "../Helpers/Alertas";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import Spinner from "../Helpers/Spinner";
import Error from "../Helpers/Error";
function Formulario({ cliente, cargando }) {
  const navigate = useNavigate();

  const nuevoClienteEsquema = Yup.object().shape({
    nombre: Yup.string()
      .required("El nombre es obligatorio")
      .min(2, "el nombre es muy corto")
      .max(15, "El nombre es muy largo"),
    empresa: Yup.string()
      .required("La empresa es obligatorio")
      .max(40, "el nombre de la empresa  es muy largo"),
    email: Yup.string()
      .email("Email no Valido")
      .required("El email es obligatorio"),
    telefono: Yup.number()
      .typeError("El numero no es valido")
      .integer("El telefono no es valido")
      .positive("Numero no Valido")
      .required("El telefono es obligatorio")
      .min(9, "Debe contener 9 numeros"),
    notas: "",
  });

  const handleSubmit = async (valores) => {
    try {
      let respuesta;
      if (cliente.id) {
        ///editando
        const url = `http://localhost:4000/clientes/${cliente.id}`;
         respuesta = await fetch(url, {
          method: "PUT",
          body: JSON.stringify(valores),
          headers: { "Content-Type": "application/json" },
        });
      } else {
        //creandodop
        const url = "http://localhost:4000/clientes";
        respuesta = await fetch(url, {
          method: "POST",
          body: JSON.stringify({ ...valores, id: uuidv4() }),
          headers: { "Content-Type": "application/json" },
        });
      }
      await respuesta.json();
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <Formik
      initialValues={{
        nombre: cliente?.nombre ?? "",
        empresa: cliente?.empresa ?? "",
        email: cliente?.email ?? "",
        telefono: cliente?.telefono ?? "",
        notas: cliente?.notas ?? "",
      }}
      enableReinitialize={true}
      onSubmit={async (values, { resetForm }) => {
        await handleSubmit(values);
        resetForm();
        navigate("/clientes");
      }}
      validationSchema={nuevoClienteEsquema}
    >
      {({ errors, touched }) => {
        return cargando ? (
          <Spinner />
        ) : (
          <Form
            className="p-10 w-full md:w-2/4 my-10 rounded mx-auto bg-white shadow-xl
            border-4 border-indigo-400"
          >
            <div className="flex flex-col p-4 mb-2">
              <label className="text-xl text-3 font-bold" htmlFor="nombre">
                Nombre
              </label>
              <Field
                type="text"
                id="nombre"
                name="nombre"
                className="p-2 w-full my-3 text-lg bg-indigo-100 rounded-sm text-gray-600 shadow-md focus:outline-none focus:ring focus:ring-purple-400"
                placeholder="Escribe tu nombre"
              />
              {errors.nombre && touched.nombre ? (
                <Alertas>{errors.nombre}</Alertas>
              ) : null}
            </div>

            <div className="flex flex-col p-4 mb-2">
              <label className="text-xl text-3 font-bold" htmlFor="empresa">
                Empresa
              </label>
              <Field
                type="text"
                id="empresa"
                name="empresa"
                className="p-2 w-full my-3 text-lg bg-indigo-100 rounded-sm text-gray-600 shadow-md focus:outline-none focus:ring focus:ring-purple-400"
                placeholder="Escribe el nombre de la empresa"
              />
              {errors.empresa && touched.empresa ? (
                <Alertas>{errors.empresa}</Alertas>
              ) : null}
            </div>

            <div className="flex flex-col p-4 mb-2">
              <label className="text-xl text-3 font-bold" htmlFor="email">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="p-2 w-full my-3 text-lg bg-indigo-100 rounded-sm text-gray-600 shadow-md focus:outline-none focus:ring focus:ring-purple-400"
                placeholder="Escribe tu correo"
              />
              {errors.email && touched.email ? (
                <Alertas>{errors.email}</Alertas>
              ) : null}
            </div>

            <div className="flex flex-col p-4 mb-2">
              <label className="text-xl text-3 font-bold" htmlFor="telefono">
                Telefono
              </label>
              <Field
                type="tel"
                id="telefono"
                name="telefono"
                className="p-2 w-full my-3 text-lg bg-indigo-100 rounded-sm text-gray-600 shadow-md focus:outline-none focus:ring focus:ring-purple-400"
                placeholder="Telefono del Cliente"
              />
              {errors.telefono && touched.telefono ? (
                <Alertas>{errors.telefono}</Alertas>
              ) : null}
            </div>
            <div className="flex flex-col p-4 mb-2">
              <label className="text-xl text-3 font-bold" htmlFor="notas">
                Notas
              </label>
              <Field
                as="textarea"
                type="text"
                id="notas"
                name="notas"
                className="p-2 w-full my-3 text-lg max-h-32 bg-indigo-100 rounded-sm text-gray-600 shadow-md focus:outline-none focus:ring focus:ring-purple-400"
                placeholder="Notas del cliente"
              />
            </div>
            <input
              type="submit"
              value={`${cliente?.id ? "Editando" : "Enviar"}`}
              className="bg-3 text-white text-xl text-center uppercase font-black p-2 rounded-md shadow-md w-full cursor-pointer"
            />
          </Form>
        );
      }}
    </Formik>
  );
}
Formulario.defaultProps = {
  cliente: {},
  cargando: false,
};

export default Formulario;
