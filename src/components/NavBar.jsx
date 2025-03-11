"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50">
      <nav className="max-w-6xl mx-auto px-6 py-2 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          <Image 
            src="/cristilogo.png" 
            alt="Cris Beauty Logo" 
            width={500} 
            height={500} 
            className="w-auto h-12 object-contain cursor-pointer" // Tamaño limitado
          />
        </Link>

        {/* Menú en desktop */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link href="/" className="text-black hover:text-pink-700 transition duration-300">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/servicios" className="text-black hover:text-pink-700 transition duration-300">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/citas" className="text-black hover:text-pink-700 transition duration-300">
              Citas
            </Link>
          </li>
          <li>
            <Link href="/contacto" className="text-black hover:text-pink-700 transition duration-300">
              Contacto
            </Link>
          </li>
        </ul>

        {/* Icono de menú hamburguesa en móviles */}
        <button 
          className="md:hidden text-black text-2xl" 
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          {menuAbierto ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Menú desplegable en móviles */}
      <div className={`absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ${menuAbierto ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center space-y-4 py-6 text-lg">
          <li>
            <Link href="/" className="text-black hover:text-pink-700 transition duration-300" onClick={() => setMenuAbierto(false)}>
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/servicios" className="text-black hover:text-pink-700 transition duration-300" onClick={() => setMenuAbierto(false)}>
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/citas" className="text-black hover:text-pink-700 transition duration-300" onClick={() => setMenuAbierto(false)}>
              Citas
            </Link>
          </li>
          <li>
            <Link href="/contacto" className="text-black hover:text-pink-700 transition duration-300" onClick={() => setMenuAbierto(false)}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}