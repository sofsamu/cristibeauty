"use client";
import Link from "next/link";

export default function ServicesMakeup() {
  return (
    <div className="p-6 sm:p-10 text-center">
      <h1 className="text-3xl font-bold font-serif text-pink-700">Servicio de Maquillaje</h1>
      <p className="mt-2 text-gray-600 text-sm">Explora nuestros distintos tipos de servicios de maquillaje.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 px-4 sm:px-16">

        <div className="p-6 bg-white shadow-lg text-center border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Maquillaje social</h2>
          <p className="text-gray-600 mt-2">Maquillaje para eventos, fiestas o reuniones, resaltando tus rasgos de forma natural y elegante.</p>
          <p className="text-pink-700 font-bold text-lg mt-3">30€</p>
        </div>

        <div className="p-6 bg-white shadow-lg text-center border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Maquillaje Novia</h2>
          <p className="text-gray-600 mt-2">Maquillaje especial para novias, diseñado para durar todo el evento con un acabado impecable.</p>
          <p className="text-pink-700 font-bold text-lg mt-3">Consultar precio</p>
        </div>

        <div className="p-6 bg-white shadow-lg text-center border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Maquillaje Novio</h2>
          <p className="text-gray-600 mt-2">Maquillaje ligero y natural para novios, eliminando brillos y mejorando la apariencia en fotos y videos.</p>
          <p className="text-pink-700 font-bold text-lg mt-3">Consultar precio</p>
        </div>

      </div>
    </div>
  );
}