  
  const Formacion = () => {


    const datosFormacion =  [
        {
            nombre:"Universidad Privada Antenor Orrego",
            Periodo:"2016 - 2022",
            tipo:"Ingeniería de Computación y Sistemas"
            



        }
          

    ]

    return(  
        
        
        <section id="formacion" className="py-20 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">Formacion</h2>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {datosFormacion && datosFormacion.length> 0 ? datosFormacion.map((form)=>(     
          
    
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className='flex justify-between'>
                <h3 className="text-lg font-semibold mb-2">{form.nombre}</h3>
                <p className="text-gray-600 font-bold">{form.Periodo}</p>
              </div>
              <p className="text-gray-600">{form.tipo}</p>
            </div>

          ) ):<p>No hay datos</p>}
    </div>
        </section>
    
    
    )


  };
  export default Formacion
  
