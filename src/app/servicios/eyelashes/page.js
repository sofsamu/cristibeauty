"use client";
import Link from "next/link";

export default function ServicioPestanasCejas() {
  return (
    <div className="p-6 sm:p-10 text-center">
      <h1 className="text-3xl font-bold font-serif text-pink-700">Pestañas y Cejas</h1>
      <p className="mt-2 text-gray-600 text-sm">Explora nuestros distintos tipos de tratamientos para pestañas y cejas.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 px-4 sm:px-16">

        <div className="p-6 bg-white shadow-lg text-center border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Extensión de Pestañas</h2>
          <p className="text-gray-600 mt-2">Extensiones para realzar la longitud y volumen de tus pestañas con un acabado natural.</p>
          <p className="text-pink-700 font-bold text-lg mt-3">30€</p>
        </div>

        <div className="p-6 bg-white shadow-lg text-center border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Relleno 2 Semanas</h2>
          <p className="text-gray-600 mt-2">Mantenimiento de extensiones de pestañas para conservar su volumen y apariencia.</p>
          <p className="text-pink-700 font-bold text-lg mt-3">20€</p>
        </div>

        <div className="p-6 bg-white shadow-lg text-center border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Relleno 3 Semanas</h2>
          <p className="text-gray-600 mt-2">Retoque de extensiones de pestañas para mantenerlas perfectas por más tiempo.</p>
          <p className="text-pink-700 font-bold text-lg mt-3">25€</p>
        </div>

        <div className="p-6 bg-white shadow-lg text-center border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Lifting de Pestañas</h2>
          <p className="text-gray-600 mt-2">Curvado natural de pestañas para un efecto más abierto y definido en la mirada.</p>
          <p className="text-pink-700 font-bold text-lg mt-3">15€</p>
        </div>

        <div className="p-6 bg-white shadow-lg text-center border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Lifting con Tinte</h2>
          <p className="text-gray-600 mt-2">Lifting de pestañas con tinte para un efecto más intenso y duradero.</p>
          <p className="text-pink-700 font-bold text-lg mt-3">20€</p>
        </div>

        <div className="p-6 bg-white shadow-lg text-center border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Retirada de Extensiones</h2>
          <p className="text-gray-600 mt-2">Eliminación segura de extensiones de pestañas sin dañar las naturales.</p>
          <p className="text-pink-700 font-bold text-lg mt-3">5€</p>
        </div>

        <div className="p-6 bg-white shadow-lg text-center border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Laminado de Cejas</h2>
          <p className="text-gray-600 mt-2">Moldea y fija la dirección de tus cejas para un efecto más definido y natural.</p>
          <p className="text-pink-700 font-bold text-lg mt-3">15€</p>
        </div>

        <div className="p-6 bg-white shadow-lg text-center border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Laminado con Tinte</h2>
          <p className="text-gray-600 mt-2">Laminado de cejas con tinte para un resultado más intenso y duradero.</p>
          <p className="text-pink-700 font-bold text-lg mt-3">20€</p>
        </div>

        <div className="p-6 bg-white shadow-lg text-center border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Depilacion cejas o labio superior</h2>
          <p className="text-gray-600 mt-2">Laminado de cejas con tinte para un resultado más intenso y duradero.</p>
          <p className="text-pink-700 font-bold text-lg mt-3">3€</p>
        </div>

        <div className="p-6 bg-white shadow-lg text-center border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Depilacion cejas y labio superior</h2>
          <p className="text-gray-600 mt-2">Laminado de cejas con tinte para un resultado más intenso y duradero.</p>
          <p className="text-pink-700 font-bold text-lg mt-3">5€</p>
        </div>

        <div className="p-6 bg-white shadow-lg text-center border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Depilacion de cejas y tinte</h2>
          <p className="text-gray-600 mt-2">Laminado de cejas con tinte para un resultado más intenso y duradero.</p>
          <p className="text-pink-700 font-bold text-lg mt-3">10€</p>
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