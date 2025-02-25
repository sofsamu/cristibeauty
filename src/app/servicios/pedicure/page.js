"use client";
import Link from "next/link";

export default function ServicioPedicura() {
  return (
    <div className="p-6 sm:p-10 text-center">
      <h1 className="text-3xl font-bold font-serif text-pink-700">Servicio de Pedicura</h1>
      <p className="mt-2 text-gray-600 text-sm">Explora nuestros distintos tipos de pedicura.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 px-4 sm:px-16">

        <div className="p-6 bg-white shadow-lg text-center border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Pedicura Simple con Semipermanente</h2>
          <p className="text-gray-600 mt-2">Corte y limado de uñas con esmaltado semipermanente de larga duración.</p>
          <p className="text-pink-700 font-bold text-lg mt-3">15€</p>
        </div>

        <div className="p-6 bg-white shadow-lg text-center border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Pedicura Completa con Semipermanente</h2>
          <p className="text-gray-600 mt-2">Incluye limpieza profunda, exfoliación, hidratación y esmaltado semipermanente.</p>
          <p className="text-pink-700 font-bold text-lg mt-3">20€</p>
        </div>

        <div className="p-6 bg-white shadow-lg text-center border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Pedicura con Polygel</h2>
          <p className="text-gray-600 mt-2">Añade polygel a cualquier pedicura para mayor resistencia y durabilidad.</p>
          <p className="text-pink-700 font-bold text-lg mt-3">+3€</p>
        </div>

      </div>

      {/* Botón de regreso */}
      <div className="mt-8">
        <Link href="/servicios">
          <span className="inline-block px-6 py-2 border-2 border-pink-700 text-pink-700 font-semibold hover:bg-pink-700 hover:text-white transition duration-300">
            Volver a Servicios
          </span>
        </Link>
      </div>
    </div>
  );
}