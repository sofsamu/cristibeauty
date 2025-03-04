import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="min-h-screen flex flex-col">
      <footer className="py-6 bg-white shadow-md mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Información */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold font-serif text-pink-500 italic">Cris Beauty</h2>
          </div>

          {/* Contacto */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">Contacto</h3>
            <p className="text-sm mt-2">📍 Calle Hernán Pérez Maldonando 2</p>
            <p className="text-sm">📞 +34 683 287 895</p>
          </div>

          {/* Redes sociales */}
          <div className="mt-4 md:mt-0">
            <h3 className="text-xl font-semibold">Síguenos</h3>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.instagram.com/cristiibeauty/" className="text-2xl text-pink-500 hover:text-pink-700 hover:scale-125 transition" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://wa.me/34683287895" className="text-2xl text-pink-500 hover:text-pink-700 hover:scale-125 transition" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
        
        {/* Derechos de autor */}
        <div className="text-center mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Cris Beauty.
        </div>
      </footer>
    </div>
  );
}