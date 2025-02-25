"use client";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contacto() {
  return (
    <div className="p-10 flex flex-col md:flex-row justify-center items-center md:items-start gap-10">
      {/* Información de contacto */}
      <div className="w-full md:w-1/2 text-left">
        <h1 className="text-3xl font-bold font-serif text-pink-700">Contáctanos</h1>
        <p className="mt-4 text-gray-600">Aún no puedes reservar tu cita directamente desde aquí, ¡pero estamos trabajando para que sea muy pronto! Mientras tanto, escríbenos por WhatsApp o Instagram para agendar tu cita. ¡Te respondemos rapidísimo!  ¡Gracias por tu confianza!</p>

        {/* Dirección */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Dirección</h2>
          <p className="text-gray-600 mt-2">
            C. Hernán Pérez Maldonado, 2, 11406 Jerez de la Frontera, Cádiz
          </p>
        </div>

        {/* Horarios */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Horarios</h2>
          <p className="text-gray-600 mt-2">
            Nuestra disponibilidad se actualiza en WhatsApp e Instagram. ¡Síguenos para conocer las nuevas fechas!
          </p>
        </div>

        {/* Teléfono */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Teléfono</h2>
          <p className="text-gray-600 mt-2">+34 683 287 895</p>
        </div>

        {/* Redes Sociales */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Redes sociales</h2>
          <div className="flex gap-4 mt-2">
            <a href="https://www.instagram.com/cristiibeauty/" target="_blank" rel="noopener noreferrer" className="text-pink-600 text-2xl">
              <FaInstagram />
            </a>
            <a href="https://wa.me/34683287895" target="_blank" rel="noopener noreferrer" className="text-green-600 text-2xl">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Mapa */}
      <div className="w-full md:w-1/2">
        <iframe
          className="w-full h-64 sm:h-80 md:h-96 shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d399.94298277649796!2d-6.108068583301042!3d36.68546683275521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0dc71e6367609b%3A0x74d38d85d0af6990!2sC.%20Hern%C3%A1n%20P%C3%A9rez%20Maldonado%2C%202%2C%2011406%20Jerez%20de%20la%20Frontera%2C%20C%C3%A1diz!5e0!3m2!1ses!2ses!4v1740477886989!5m2!1ses!2ses"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}