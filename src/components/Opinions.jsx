"use client";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Laura Gómez",
    review:
      "Increíble servicio, mis uñas quedaron espectaculares. Definitivamente volveré.",
  },
  {
    name: "María López",
    review: "Muy profesional y con gran atención al detalle. ¡Recomendadísimo!",
  },
  {
    name: "Carla Martínez",
    review:
      "El mejor salón al que he ido. Me encantaron mis uñas y el trato fue excelente.",
  },
];

export default function Testimonials() {
  return (
    <div className="relative w-full py-12">
      <div className="background absolute top-0 left-0 w-full h-full z-0">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h2 className="text-4xl  font-serif font-bold text-pink-700 text-center mb-10 z-1 relative font-merryweather">
        Opiniones de nuestros clientes.
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-1">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg text-center"
          >
            <FaQuoteLeft className="text-pink-400 text-3xl mb-4" />
            <p className="text-gray-700 italic">{testimonial.review}</p>
            <FaQuoteRight className="text-pink-400 text-3xl mt-4" />
            <div className="flex flex-col items-center mt-4">
              <p className="font-serif text-gray-800 mt-2">
                {testimonial.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 