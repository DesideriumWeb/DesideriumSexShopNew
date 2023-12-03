"use client";
import React, { useState } from "react";
import { loginApi } from "@/api/ApiUser";
import { toast, Toaster } from "react-hot-toast";
import { guardarToken } from "@/utils/token";
import { useAuthContext } from "@/contexts/authContext";
//import "./Modal.css"; // Asegúrate de tener un archivo CSS para los estilos del modal

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuthContext();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginApi(formData)
      .then((result) => {
        if (result.error) {
          console.log("ingresa 1");
          toast.error(`Mensaje : ${result.error} `);
        } else {
          console.log("ingresa 2");
          login(result);
          toast.success(`Mensaje : ${result.data}`);
        }
      })
      .catch((error) => {
        console.log("ingresa 3");
        toast.error(`Mensaje ${error} `);
      });
  };

  return (
    <>
      <div>
        <button onClick={toggleModal} className="modal-toggle">
          Login
        </button>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              {/* <button onClick={toggleModal} className="modal-close">
              &times;
            </button> */}
              <button
                onClick={toggleModal}
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium  text-black">Login</h3>
                <form className="space-y-6 font-serif" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium  text-black"
                    >
                      Correo electronico
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black "
                      placeholder="Email@company.com"
                      required=""
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Contraseña
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black"
                      required=""
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          type="checkbox"
                          defaultValue=""
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:bg-pink-700 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <label
                        htmlFor="remember"
                        className="ml-2 text-sm font-medium text-black"
                      >
                        Recordar contraseña{" "}
                      </label>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-[#D50CD5] hover:underline dark:text-[#D50CD5]"
                    >
                      Perdio su contraseña?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-[#D50CD5] hover:bg-[#9806A9] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Iniciar Session
                  </button>
                  <div className="text-sm font-medium text-black">
                    No esta registrado?{" "}
                    <a
                      href="/register"
                      className="text-[#D50CD5]  hover:underline "
                    >
                      Registrate
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default Login;
