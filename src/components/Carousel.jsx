"use client";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "/images/unas/unas3.jpeg",
  "/images/makeup/makeup5.jpeg",
  "/images/unas/unas7.jpeg",
  "/images/unas/unas5.jpeg",
  "/images/makeup/makeup2.jpeg",
  "/images/unas/unas6.jpeg"
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-3xl mx-auto m-8">
      {/* Imagen */}
      <img
        src={images[index]}
        alt={`Imagen ${index + 1}`}
        className="w-full h-96 object-cover"
      />

      {/* Botón Anterior */}
      <button
        className="absolute top-1/2 left-4 bg-white/50 p-2 rounded-full shadow-md"
        onClick={prevSlide}
      >
        <FaArrowLeft className="text-gray-800" />
      </button>

      {/* Botón Siguiente */}
      <button
        className="absolute top-1/2 right-4 bg-white/50 p-2 rounded-full shadow-md"
        onClick={nextSlide}
      >
        <FaArrowRight className="text-gray-800" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-pink-500" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}