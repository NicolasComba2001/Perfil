import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';


export default function Formulario(){
    const { register, handleSubmit, formState,formState: { errors}, reset} = useForm();

    useEffect(()=>{
    if(formState.isSubmitSuccessful){
        const timer = setTimeout(() => {
            reset({
                nombre: "",
                email: "",
                asunto: "",
                mensaje: ""
            });
        }, 800);
        return ()=>clearTimeout(timer);
    }   
    
    },[formState, reset])

    const onSubmit = (data) => {
       
        console.log(data)};
    return(
        <form className="flex flex-col m-1 md:w-[90%] md:m-auto md:mt-8
                lg:w-[62%]
                " onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex mb-2 justify-around w-full items-center">
                        <div className={`w-[50%] mr-1 mb-1
                        relative

                        before:content-['']
                        before:w-4
                        before:h-4
                        before:bg-white
                        before:rounded-full
                        before:top-[-5px]
                        before:right-0
                        md:before:right-[-5px]
                        before:z-10
                        before:absolute
                        before:opacity-0
                        
                        ${errors.nombre && 'before:opacity-100 before:animate-ping'}
                        `}>
                            <input  className={`
                            caret-[#FD6E04]
                            outline-none
                            text-white
                            h-20
                            bg-[#273746]
                            w-full
                            rounded
                            
                            
                            ${errors.nombre?.type === "required" && 'border-red-900 border-2' }
                            `}
                            {...register("nombre", { required: true, maxLength: 255, pattern: /^[A-Za-z]+$/i  })} type="text" placeholder="Tu nombre..." />
                            
                        </div>
                        <div className={`w-[50%]  mb-1
                        relative

                        before:content-['']
                        before:w-4
                        before:h-4
                        before:bg-white
                        before:rounded-full
                        before:top-[-5px]
                        before:right-0
                        md:before:right-[-5px]
                        before:z-10
                        before:absolute
                        before:opacity-0
                        
                        ${errors.email && 'before:opacity-100 before:animate-ping'}
                        `}>
                            <input  className={`
                            caret-[#FD6E04]
                            outline-none
                            text-white
                            h-20
                            bg-[#273746]
                            w-full
                            rounded
                            
                            
                            ${errors.email?.type === "required" && 'border-red-900 border-2'}
                            `}
                            {...register("email", { required: true, maxLength: 255, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/  })} type="text" placeholder="Tu E-mail" />
                            
                        </div>
                    </div>
                    <div className={`flex justify-center mb-3
                    relative

                    before:content-['']
                    before:w-4
                    before:h-4
                    before:bg-white
                    before:rounded-full
                    
                    before:top-[-5px]
                    before:right-0
                    md:before:right-[-5px]
                    before:z-10
                    before:absolute
                    before:opacity-0
                    
                    ${errors.asunto && 'before:opacity-100 before:animate-ping'}
                    `}>
                        <input className={`
                        caret-[#FD6E04]
                        outline-none
                        text-white
                        h-20
                        bg-[#273746]
                        w-full
                        rounded
                        
                        

                        ${errors.asunto?.type === "required" && 'border-red-900 border-2'}
                        `}
                        {...register("asunto", { required: true, maxLength: 155, pattern: /^[A-Za-z]+$/i })} type="text" placeholder="Asunto" />
                        
                    </div>
                    <div className={`flex justify-center mb-1
                    relative

                    before:content-['']
                    before:w-4
                    before:h-4
                    before:bg-white
                    before:rounded-full
                    
                    before:top-[-5px]
                    before:right-0
                    md:before:right-[-5px]
                    before:z-10
                    before:absolute
                    before:opacity-0
                    
                    ${errors.mensaje && 'before:opacity-100 before:animate-ping'}
                    `}>
                        <textarea className={`
                        caret-[#FD6E04]
                        outline-none
                        text-white
                        bg-[#273746]
                        w-full
                        resize-none
                        h-[200px]
                        rounded
                        
                        
                        

                        ${errors.mensaje?.type === "required" && 'border-red-900 border-2 '}
                        `}
                        {...register("mensaje", { required: true, maxLength: 255})} 
                        placeholder="Escribe tu mensaje..."
                        ></textarea>
                        
                    </div>
                        <input type="submit" className="w-28 m-2 p-2 text-white bg-[#ea580c] rounded cursor-pointer"/>
        </form>
    );
}