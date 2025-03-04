"use client";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          <Image 
            src="/images/logo.png" 
            alt="Cris Beauty Logo" 
            width={96} 
            height={50} 
            className="object-contain cursor-pointer"
          />
        </Link>

        {/* Menú */}
        <ul className="flex space-x-8 text-lg">
          <li>
            <Link href="/" className="text-black hover:text-pink-500 transition duration-300">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/servicios" className="text-black hover:text-pink-500 transition duration-300">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/contacto" className="text-black hover:text-pink-500 transition duration-300">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}