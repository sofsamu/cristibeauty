import Carousel from "@/components/Carousel";
import ContactIndex from "@/components/ContactIndex";
import Opinions from "@/components/Opinions";
import ServicesIndex from "@/components/ServicesComp/ServicesIndex";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <section className="relative w-full h-[500px]">
        {/* Imagen de fondo */}
        <div className="w-full h-full">
          <Image
            src="/images/unas/unas1.jpeg"
            alt="Uñas decoradas"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Texto sobre la imagen */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50 p-6">
          <h1 className="text-5xl font-serif font-bold italic">Cristi Beauty</h1>
          <p className="text-lg mt-2">
            Tu salón de belleza especializado en uñas y cuidado personal.
          </p>
        </div>
      </section>
      <ServicesIndex />
      <ContactIndex />
      <Carousel />
      <Opinions />
    </main>
  );
}
