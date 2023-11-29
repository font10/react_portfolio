
export const ContactForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault(e);
  }

  return (
    <section className="w-10/12 lg:w-full">
      <form onSubmit={handleSubmit} className="w-10/12 flex flex-col px-7 py-5">
        <fieldset className="w-full">
          <section className="flex flex-col lg:flex-row w-full gap-3">
            <div className="flex flex-col w-full mt-5" key={crypto.randomUUID()}>              
              <label htmlFor='name' className="text-sm text-gray-500 font-medium">Nombre</label> 
              <input type='text' name='nombre' placeholder='Nombre' className="py-3 mt-1 bg-gray-200 rounded-md text-black text-sm font-lato px-5 border-2 border-gray-200 border-opacity-80" />
            </div> 
            <div className="flex flex-col w-full mt-5" key={crypto.randomUUID()}>              
              <label htmlFor='apellido' className="text-sm text-gray-500 font-medium">Apellido</label> 
              <input type='text' name='apellido' placeholder='Apellido' className="py-3 mt-1 bg-gray-200 rounded-md text-black text-sm font-lato px-5 border-2 border-gray-200 border-opacity-80" />
            </div>       
          </section>
          <div className="flex flex-col mt-5" key={crypto.randomUUID()}>              
            <label htmlFor='tema' className="text-sm text-gray-500 font-medium">Tema</label> 
            <input type='text' name='tema' placeholder='Tema' className="py-3 mt-1 bg-gray-200 rounded-md text-black text-sm font-lato px-5 border-2 border-gray-200 border-opacity-80" />
          </div> 
          <div className="flex flex-col mt-5" key={crypto.randomUUID()}>              
            <label htmlFor='mensaje' className="text-sm text-gray-500 font-medium">Mensaje</label> 
            <textarea rows='8' cols='50' id='mensaje' placeholder='Mensaje' className="py-3 mt-1 bg-gray-200 rounded-md text-black text-sm font-lato px-5 border-2 border-gray-200 border-opacity-80" />
          </div> 
          <button className="mt-4 text-[16px] w-full py-2 rounded-md font-medium bg-gradient-to-r from-pink-600 via-red-500 to-red-400">Enviar</button>
        </fieldset>
      </form>
    </section>
  )
}
