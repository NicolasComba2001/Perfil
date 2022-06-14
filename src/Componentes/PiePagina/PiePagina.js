import React from "react";
import Formulario from "./Formulario";

export default function PiePagina() {
  return (
    <footer id="contacto" className="mt-8 md:mt-12">
        
      <section  className="
      flex
      flex-col
      justify-center
      w-full
      max-h-max
      ">

            <article   className="mt-8">
            <p className="text-center 
            font-bold 
            text-[1.5em] 
            text-white
            relative
            before:content-['CONTACTO']
            before:absolute
            before:top-[-80%]
            before:left-0
            before:text-[2em]
            before:flex
            before:justify-center
            before:items-center
            before:w-full
            before:opacity-[.3]
            titulos

            md:text-[2em]
            lg:text-[2.5em]
            2xl:text-[3.5em]
            ">CONTACTO</p>
            <p className="text-[#ffff] text-center text-[.9em] mt-2 w-[70%] mx-auto md:text-[1.1em] lg:text-[1.3em] 2xl:w-[45%]">
            Si bien, soy excelente para leer la mente, existen formas más sencillas de comunicarse con usted y responder sus preguntas.
            </p>
            </article>

            <section  className="
            p-1
            lg:flex
            lg:w-[90%]
            lg:m-auto
            lg:justify-around
            ">
                <article className="flex flex-col justify-around mb-8 md:w-[90%] md:m-auto md:self-start lg:w-auto lg:m-0">
                    <section className="flex justify-center items-center mt-8 mb-2">
                        <figure className="
                        h-10
                        w-10
                        mr-2
                        ">
                        <img className="w-10 h-full object-cover" src="./imagenes/contacto/mensajecontacto.webp" alt="" />
                        </figure>
                        <section className="w-full">
                            <p className="text-[1.1em] text-white lg:text-[1.2em]">Escribeme</p>
                            <p className="text-[.8em] text-white lg:text-[1.2em]">Estoy para ayudarte.</p>
                            <a href="mailto:nicolaseliascomba_2001@hotmail.com?subject=Muy buenas!&body=Me gustaria contactarme contigo." className="text-[.9em] text-[#ea580c] lg:text-[.9em]">Correo: nicolaseliascomba_2001@hotmail.com</a>
                        </section>
                    </section>
                    <section className="flex justify-center items-center mt-8 mb-2">
                        <figure className="
                        w-10
                        h-10
                        mr-2
                        ">
                        <img className="w-full h-full object-cover" src="./imagenes/contacto/ubicacion.png" alt="" />
                        </figure>
                        <section className="w-full">
                            <p className="text-[1.1em] text-white lg:text-[1.2em]">Encuentrame</p>
                            <p className="text-[.8em] text-white lg:text-[1.2em]">Argentina, Cordoba.</p>
                            <a href="https://www.google.com.ar/maps/place/Argentina/@-37.0269872,-81.5925865,4z/data=!3m1!4b1!4m5!3m4!1s0x95bccaf5f5fdc667:0x3d2f77992af00fa8!8m2!3d-38.416097!4d-63.616672" target={"_blank"} rel="noreferrer" className="text-[.9em] text-[#ea580c] lg:text-[1.2em]">Google maps</a>
                        </section>
                    </section>
                </article>
                <Formulario></Formulario>
            </section>

      </section>

        <article  className="bg-[#121212] mt-8 h-44 flex flex-col items-center justify-center ">
            <section className="flex  items-center h-[50%]">
                <figure className="
                w-8
                h-8
                m-4
                hover:scale-125
                hover:transition-transform
               
                ">
                    <a href="https://www.instagram.com/nicolascomba/" target={"_blank"} rel="noreferrer">
                        <img className="
                        hover:shadow-black hover:shadow-md
                        rounded
                        w-full
                        h-full
                        object-cover" src="./imagenes/redes/instagram.png" alt="red social, instagram" />
                    </a>
                </figure>
                <figure className="
                w-8
                h-8
                m-4
                hover:scale-125
                hover:transition-transform
                
                
                ">
                    <a href="https://www.facebook.com/nico.comba.50/" target={"_blank"} rel="noreferrer" >
                        <img className="  
                        hover:shadow-black hover:shadow-md
                        rounded
                        w-full
                        h-full
                        object-cover" src="./imagenes/redes/facebook.png" alt="red social, facebook" />
                    </a>
                    
                </figure>
                <figure className="
                w-8
                h-8
                m-4
                hover:scale-125
                hover:transition-transform
                
                ">
                    <a href="https://www.linkedin.com/in/nicolas-elias-comba-334324196/" target={"_blank"} rel="noreferrer">
                        <img className="
                        rounded
                        hover:shadow-black hover:shadow-md
                        w-full
                        h-full
                        object-cover" src="./imagenes/redes/linkedin.png" alt="red social, linkedin" />
                    </a>
                </figure>
            </section>
            <p className="text-[1.5em] text-[white] font-bold h-[50%]">NICOLAS COMBA</p>
            <p className="text-[#ea580c] text-[.8em] justify-self-end">2022 WebsArg. All rights reserved.</p>
        </article>
    </footer>
  );
}
