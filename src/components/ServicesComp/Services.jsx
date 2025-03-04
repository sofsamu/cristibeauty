"use client";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold font-serif text-pink-700">Nuestros Servicios</h1>
      <p className="mt-2 text-gray-600 text-sm">Explora nuestros servicios de belleza.</p>

      <section className="grid grid-cols-2 gap-6 mt-6 px-4 sm:px-16">
        
        <Link href="/servicios/eyelashes" className="relative group block">
          <div className="w-full h-[250px] relative">
            <Image
              src="/images/eyelashes/eyelashes4.jpeg"
              alt="Servicio de pestañas"
              layout="fill"
              className="object-cover w-full h-full transition duration-300 group-hover:opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white font-semibold italic text-lg group-hover:bg-opacity-50">
              Pestañas y cejas
            </div>
          </div>
        </Link>

        <Link href="/servicios/nails" className="relative group block">
          <div className="w-full h-[250px] relative">
            <Image
              src="/images/unas/unas8.jpeg"
              alt="Servicio de uñas"
              layout="fill"
              className="object-cover w-full h-full transition duration-300 group-hover:opacity-70"
            />
            <div className="absolute inset-0 flex items-center italic justify-center bg-black bg-opacity-30 text-white font-semibold text-lg group-hover:bg-opacity-50">
              Uñas
            </div>
          </div>
        </Link>

        <Link href="/servicios/makeup" className="relative group block">
          <div className="w-full h-[250px] relative">
            <Image
              src="/images/makeup/makeup5.jpeg"
              alt="Servicio de maquillaje"
              layout="fill"
              className="object-cover w-full h-full transition duration-300 group-hover:opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center italic bg-black bg-opacity-30 text-white font-semibold text-lg group-hover:bg-opacity-50">
              Maquillaje
            </div>
          </div>
        </Link>

        <Link href="/servicios/pedicure" className="relative group block">
          <div className="w-full h-[250px] relative">
            <Image
              src="/images/pedicure2.jpg"
              alt="Servicio de pedicura"
              layout="fill"
              className="object-cover w-full h-full transition duration-300 group-hover:opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center italic bg-black bg-opacity-30 text-white font-semibold text-lg group-hover:bg-opacity-50">
              Pedicura
            </div>
          </div>
        </Link>

      </section>
    </div>
  );
}