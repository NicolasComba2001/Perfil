import React from "react";
import TarjetaServicio from "./TarjetaServicio";

export default function Servicios() {
  return (
    <article id="servicios" className="mt-12 bg-[#121212] lg:mt-24">
      <section
        className="
            flex
            flex-col
            justify-center
            xl:w-[90%]
            xl:m-auto
            "
      >
        <article className="m-8 lg:m-16">
          <h5
            className='text-center font-bold 
                    text-[#ffff]
                    text-[1.5em]
                    relative
                    before:content-["SERVICIOS"]
                    before:absolute
                    before:top-[-80%]
                    before:left-0
                    before:flex
                    before:justify-center
                    before:items-center
                    before:w-full
                    before:text-[2em]
                    titulos
                    before:opacity-[.3]
                    before:tracking-wide
                    
                    md:text-[2em]
                    lg:text-[2.5em]
                    2xl:text-[3.5em]
                    '
          >
            PARA CLIENTES
          </h5>
          <p className="text-center text-[#ffff] mt-4 text-[.9] md:text-[1.1em] w-[70%] m-auto lg:text-[1.2em] 2xl:w-[40%]">
          Creamos tu página web dinámica, optimizada y con un alto rendimiento para que impulses tu marca o tu negocio.
          </p>
        </article>

        <article
          className="
                grid
                grid-cols-[repeat(1,fr)]
                place-items-center

                md:grid-cols-[repeat(auto-fill,minmax(34%,1fr))]
                lg:w-[90%]
                lg:m-auto
                xl:w-[100%]
                xl:grid-cols-[repeat(auto-fill,minmax(33%,1fr))]
                2xl:w-[80%]
                "
        >
          <TarjetaServicio
            imagen="./imagenes/servicios/desarrolloweb.png"
            titulo="Desarrollo Web (FrontEnd)"
            descripcion="¡Si puedes pensarlo, puedes crearlo! Desarrollo con entusiasmo y alegría páginas de todo tipo, con los diseños de tus sueños."
          />
      
          <TarjetaServicio
            imagen="./imagenes/servicios/matenimientoweb.png"
            titulo="Mantenimiento Web"
            descripcion="Mantenimiento semanal o mensual, ya sea para actualizaciones mínimas o grandes. Contamos con atención al cliente las 24 horas del día."
          />
          <TarjetaServicio
            imagen="./imagenes/servicios/seo.png"
            titulo="SEO"
            descripcion="Aplicamos las mejores y más limpias técnicas SEO para que tu sitio sea el mas visitado e increible."
          />

          
          
        </article>
      </section>
    </article>
  );
}
