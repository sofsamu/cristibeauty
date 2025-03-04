"use client";
import Link from "next/link";

export default function ServicioUnas() {
  return (
    <div className="p-6 sm:p-10 text-center">
      <h1 className="text-3xl font-bold font-serif text-pink-700">Servicio de Uñas</h1>
      <p className="mt-2 text-gray-600 text-sm">Explora nuestros distintos tipos de manicura.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 px-4 sm:px-16">

        <div className="p-6 bg-white shadow-lg text-center border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Manicura Polygel/Acrigel</h2>
          <p className="text-gray-600 mt-2">Extensión de uñas con una combinación de gel y acrílico para mayor resistencia.</p>
          <p className="text-pink-700 font-bold text-lg mt-3">20€</p>
        </div>

        <div className="p-6 bg-white shadow-lg text-center border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Manicura Semipermanente</h2>
          <p className="text-gray-600 mt-2">Esmaltado de larga duración con acabado brillante y resistente.</p>
          <p className="text-pink-700 font-bold text-lg mt-3">12€</p>
        </div>

        <div className="p-6 bg-white shadow-lg text-center border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Semipermanente con Refuerzo de Gel</h2>
          <p className="text-gray-600 mt-2">Esmaltado semipermanente con una capa extra de gel para mayor durabilidad.</p>
          <p className="text-pink-700 font-bold text-lg mt-3">15€</p>
        </div>

        <div className="p-6 bg-white shadow-lg text-center border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Relleno</h2>
          <p className="text-gray-600 mt-2">Mantenimiento y relleno de uñas de gel o acrílico para prolongar su duración.</p>
          <p className="text-pink-700 font-bold text-lg mt-3">15€</p>
        </div>

        <div className="p-6 bg-white shadow-lg text-center border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Manicura Híbrida</h2>
          <p className="text-gray-600 mt-2">Combinación de esmalte tradicional con una capa de gel para mayor duración.</p>
          <p className="text-pink-700 font-bold text-lg mt-3">22€</p>
        </div>

        <div className="p-6 bg-white shadow-lg text-center border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Retirada</h2>
          <p className="text-gray-600 mt-2">Eliminación cuidadosa del esmalte semipermanente, gel o acrílico sin dañar la uña natural.</p>
          <p className="text-pink-700 font-bold text-lg mt-3">5€</p>
        </div>
      </div>
    </div>
  );
}