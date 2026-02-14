
import bodegaweb from "../assets/bodegaweb.png";

const ProjectCard = () => {
    const projects = [
        {
            title: "Sistema de Bodega",
            description: "Sistema de Venta de Bodega",
            image: bodegaweb,
            tags: ["React Js", "Tailwind", "Mysql", "NodeJs", "Express", "Typescript"],
            github: ["https://github.com/bran24/BodegaWebAplicacion.git","https://github.com/bran24/BodegaWebApi"],
            demo: "https://bodega-web-aplicacion.vercel.app/"
        }

    ]


    const abrirEnlaces = (enlaces:any) => {

    window.open(enlaces[0], '_blank');
    
    window.location.href = enlaces[1];
  
};



    return (

        <section id="proyectos" className="py-20 max-w-7xl mx-auto px-4">
        
        <h2 className="text-3xl font-bold mb-10 text-center">Proyectos</h2>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">

                {projects && projects?.length > 0 ? projects.map((project, index) => (

                    <div className="bg-border rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 bg-white">
                        {/* Imagen del proyecto */}

                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 transform hover:scale-105 transition-transform duration-500"
                        />


                        {/* Contenido */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                            {/* Tecnologías */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-semibold px-2 py-1 bg-blue-50 text-blue-600 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Botones */}
                            <div className="flex gap-4">
                                <button onClick={ () =>abrirEnlaces(project.github)} className="flex-1 text-center py-2 bg-primary text-white rounded-lg text-sm hover:bg-gray-800 transition"> Código</button>
                                 <button onClick={ () =>    window.open(project.demo, '_blank') } className="flex-1 text-center py-2 bg-primary text-white rounded-lg text-sm hover:bg-gray-800 transition"> Demo</button>
                                 
                                
                                
                            </div>
                        </div>
                    </div>


                )) : <p>No hay proyectos</p>}


            </div>


       </section>

    );
}

export default ProjectCard;


