"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaUserPlus, FaSignInAlt } from "react-icons/fa";
import Logoapp from "@/assets/Logo-App.png";
import Account from "@/components/Account";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Alternar la visibilidad del modal
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-800 text-white w-full fixed top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-5">
            <Image src={Logoapp} alt="Logo de la App" width={50} height={50} />
            <a href="/" className="text-2xl font-bold mr-2">
              Snaply
            </a>
          </div>

          {/* Botones de Iniciar sesión y Registrarse */}
          <div className="hidden md:flex space-x-4">
            <button
              onClick={toggleModal}
              className="bg-transparent hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-white rounded"
            >
              <FaSignInAlt className="mr-2" />
              Iniciar Sesión
            </button>
            <button
              onClick={toggleModal}
              className="bg-transparent hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-white rounded flex items-center"
            >
              <FaUserPlus className="mr-2" />
              Registrarse
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-800">
            <button
              onClick={toggleModal}
              className="block px-4 py-2 text-sm hover:bg-gray-700"
            >
              Iniciar Sesión
            </button>
            <button
              onClick={toggleModal}
              className="block px-4 py-2 text-sm hover:bg-gray-700"
            >
              Registrarse
            </button>
          </div>
        )}
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Componente Account dentro del modal */}
            <Account />
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
