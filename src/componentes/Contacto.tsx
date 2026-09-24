
export const Contacto = () => {
  return (
    <section id="contacto" className="bg-[url('https://images.unsplash.com/photo-1476231682828-37e571bc172f?fm=jpg&q=60&w=3000&auto=format&fit=crop')] 
        bg-cover bg-center bg-no-repeat py-20 px-4">
        <div className="bg-[#EEEEE5] max-w-3xl mx-auto text-center p-8 rounded-3xl md:p-14">
            <h2 className="text-2xl md:text-3xl font-medium text-lumbert-amber pb-6 ">¿Tienes un Proyecto en Mente? <br />Contactanos</h2>
            <form className="flex flex-col gap-4 text-gray-800">
                <input type="text" placeholder="Nombre" className="py-3 text-sm outline-none border-b border-b-gray-400/60 focus:border-b-black" />
                <input type="text" placeholder="Apellido" className="py-3 text-sm outline-none border-b border-b-gray-400/60 focus:border-b-black" />
                <input type="email" placeholder="Correo Electrónico" className="py-3 text-sm outline-none border-b border-b-gray-400/60 focus:border-b-black" />
                <input type="email" placeholder="Telefono" className="py-3 text-sm outline-none border-b border-b-gray-400/60 focus:border-b-black" />
                <textarea placeholder="Detalles de la obra o mueble" className="py-3 text-sm outline-none border-b border-b-gray-400/60 focus:border-b-black h-28"></textarea>
                <button className="bg-[#B34325] hover:bg-black text-white font-bold text-sm uppercase py-4 rounded-full md:col-span-2 transition">
                    Enviar
                </button>
            </form>
        </div>
        
    </section>
  )
}
