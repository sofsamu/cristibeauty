"use client";
import Image from "next/image";
import Link from "next/link";

export default function ServicesIndex() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 mb-6">
      <h2 className="text-3xl font-serif font-semibold text-center text-gray-800 mb-8">
        Servicios que ofrecemos.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <Link href="/servicios/nails" className="text-center block">
          <article className="group">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Uñas</h3>
            <div className="overflow-hidden">
              <Image 
                src="/images/unas/unas2.jpeg" 
                alt="Servicio de uñas" 
                width={300} 
                height={450} 
                className="w-full h-auto object-cover aspect-[2/3] transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg"
              />
            </div>
          </article>
        </Link>

        <Link href="/servicios/eyelashes" className="text-center block">
          <article className="group">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Pestañas y cejas</h3>
            <div className="overflow-hidden">
              <Image 
                src="/images/eyelashes/eyelashes2.jpeg" 
                alt="Servicio de pestañas" 
                width={300} 
                height={450} 
                className="w-full h-auto object-cover aspect-[2/3] transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg"
              />
            </div>
          </article>
        </Link>

        <Link href="/servicios/makeup" className="text-center block">
          <article className="group">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Maquillaje</h3>
            <div className="overflow-hidden">
              <Image 
                src="/images/makeup/makeup1.jpeg" 
                alt="Servicio de maquillaje" 
                width={300} 
                height={450} 
                className="w-full h-auto object-cover aspect-[2/3] transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg"
              />
            </div>
          </article>
        </Link>

        <Link href="/servicios/pedicure" className="text-center block">
          <article className="group">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Pedicura</h3>
            <div className="overflow-hidden">
              <Image 
                src="/images/pedicure1.jpg" 
                alt="Servicio de pedicura" 
                width={300} 
                height={450} 
                className="w-full h-auto object-cover aspect-[2/3] transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg"
              />
            </div>
          </article>
        </Link>

      </div>
    </section>
  );
}