"use client";
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { saveUser } from "../../api/ApiUser";
import { toast, Toaster } from "react-hot-toast";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useRouter } from 'next/router';

const FormularioContact = () => {
  const [iconPassword, seticonPassword] = useState(false);
  const [iconConfirmarPassword, setIconConfirmarPassword] = useState(false);
  const [banderaUser, setBanderaUser] = useState(false);
  // const router = useRouter();

  const validationS = Yup.object().shape({
    nombre: Yup.string().required("*"),
    apellido: Yup.string().required("*"),
    email: Yup.string().required("*"),
    telefono: Yup.number().required("*"),
    ciudad: Yup.string().required("*"),
    departamento: Yup.string().required("*"),
    direccionResidencia: Yup.string().required("*"),
    fNacimiento: Yup.date().required("*"),
    password: Yup.string().required("*"),
    confirmarPassword: Yup.string().required("*"),
  });
  const handleGuardarUsuario = (values) => {
    const fechaActual = new Date();
    // Obtener la fecha en formato legible
    const fechaFormateada = fechaActual.toLocaleDateString();

    // Obtener la hora en formato legible
    const horaFormateada = fechaActual.toLocaleString("es-CO", {
      timeZone: "America/Bogota",
    });
    const currentDate = `${fechaFormateada} ${horaFormateada}`;

    const [diaNacimiento, mesNacimiento, anioNacimiento] =
      values.fNacimiento.split("/"); // Dividir la cadena de fecha en día, mes y año

    // Crear un objeto de fecha a partir de los valores obtenidos del input
    const fecha = new Date(diaNacimiento, mesNacimiento - 1, anioNacimiento);

    // Obtener los componentes individuales de la fecha con los métodos de formato
    const diaNacimientoFormateado = fecha.getDate();
    const mesNacimientoFormateado = fecha.getMonth() + 1; // Los meses se indexan desde 0, por lo que se suma 1.
    const anioNacimientoFormateado = fecha.getFullYear();
    const fechaNacimientoFormateada = `${diaNacimientoFormateado}/${mesNacimientoFormateado}/${anioNacimientoFormateado}`;
    const useR = {
      rol: "CLIENTE",
      name: values.nombre,
      lastName: values.apellido,
      email: values.email,
      telefono: values.telefono.toString(),
      ciudad: values.ciudad,
      departamento: values.departamento,
      direccionResidencia: values.direccionResidencia,
      fechaNacimiento: fechaNacimientoFormateada,
      fechaRegistro: currentDate,
      password: values.password,
    };
    if (values.password === values.confirmarPassword) {
      if (values.password.length > 6) {
        saveUser(useR)
          .then((result) => {
            if (result.error) {
              toast.error(
                `Usuario no fue guardado con exito ${result.mensaje} `
              );
            } else {
              toast.success(
                `Usuario fue guardado, revisa tu correo electronico ${result.mensaje} `
              );
              setBanderaUser(true);
            }
          })
          .catch((error) => {
            toast.error(error);
          });
      } else {
        return toast.error(
          "La contraseña debe tener por lo menos mas de 7 caracteres"
        );
      }
    } else {
      toast.error("Las contraseñas no coinciden");
    }
  };

  const handleInitialValue = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    ciudad: "",
    departamento: "",
    direccionResidencia: "",
    fNacimiento: "",
    password: "",
    confirmarPassword: "",
  };
  useEffect(() => {
    if (banderaUser) {
      setTimeout(function () {
        // router.push('/');
      }, 7000);
    }
  }, [banderaUser]);

  return (
    <>
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-center mb-4">
          Formulario de registro
        </h2>
        <Formik
          initialValues={() => handleInitialValue()}
          validationSchema={validationS}
          validateOnChange={false}
          onSubmit={(values) => handleGuardarUsuario(values)}
        >
          {({ values, dirty, isValid }) => (
            <Form>
              <div className="m-5 md:m-10 mt-20 font-serif">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Nombre
                    </label>
                    <label className="text-red-500">
                      <ErrorMessage name="nombre" />
                    </label>
                    <Field
                      type="text"
                      name="nombre"
                      className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Nombre"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="apellido"
                      className="text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Apellidos
                    </label>
                    <label className="text-red-500">
                      <ErrorMessage name="apellido" />
                    </label>
                    <Field
                      type="text"
                      name="apellido"
                      className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Apellidos"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <label className="text-red-500">
                      <ErrorMessage name="email" />
                    </label>
                    <Field
                      type="text"
                      name="email"
                      className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="email"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telefono"
                      className="text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Telefono
                    </label>
                    <label className="text-red-500">
                      <ErrorMessage name="telefono" />
                    </label>
                    <Field
                      type="text"
                      name="telefono"
                      className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="telefono"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="ciudad"
                      className="text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Ciudad de residencia
                    </label>
                    <label className="text-red-500">
                      <ErrorMessage name="ciudad" />
                    </label>
                    <Field
                      type="text"
                      name="ciudad"
                      className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="ciudad"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="departamento"
                      className="text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Departamento
                    </label>
                    <label className="text-red-500">
                      <ErrorMessage name="departamento" />
                    </label>
                    <Field
                      type="text"
                      name="departamento"
                      className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="departamento"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="direccion"
                      className="text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Dirección
                    </label>
                    <label className="text-red-500">
                      <ErrorMessage name="direccion" />
                    </label>
                    <Field
                      type="text"
                      name="direcciondireccion"
                      className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="departamento"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="fechaNacimiento"
                      className="text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Fecha de nacimiento
                    </label>
                    <label className="text-red-500">
                      <ErrorMessage name="fechaNacimiento" />
                    </label>
                    <Field
                      type="text"
                      name="fechaNacimiento"
                      className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="fechaNacimiento"
                      required=""
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <label className="text-red-500">
                    <ErrorMessage name="password" />
                  </label>
                  <Field
                    type="password"
                    name="password"
                    className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="password"
                    required=""
                  />
                </div>
                <div className="mb-3 relative">
                  <label
                    htmlFor="confirmarPassword"
                    className="text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirmar password
                  </label>
                  <label className="text-red-500">
                    <ErrorMessage name="confirmarPassword" />
                  </label>
                  <Field
                    type={iconConfirmarPassword ? "text" : "password"}
                    name="confirmarPassword"
                    className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="confirmarPassword"
                    required=""
                  />
                  <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() =>
                      setIconConfirmarPassword(!iconConfirmarPassword)
                    }
                  >
                    {iconConfirmarPassword ? (
                      <FontAwesomeIcon
                        icon={faEye}
                        className="text-gray-600 mt-9 "
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        className="text-gray-600 mt-9"
                      />
                    )}
                  </span>
                </div>

                <div className="mt-6 flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#D50CD5]  text-white py-2 px-4 rounded mt-1 ml-2 block mx-auto hover:bg-[#9806A9] transition-colors duration-300"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  );
};

export default FormularioContact;
