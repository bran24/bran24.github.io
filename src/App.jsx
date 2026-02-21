import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import yoImg from './assets/yo.png'
import Navbar from './Componentes/Navbar'
import Experience from './Componentes/Experiencia'
import Skills from './Componentes/Skills'
import ProjectCard from './Componentes/Proyectos'
import FooterCustom from './Componentes/FooterCustom'
import Formacion from './Componentes/Formacion'
function App() {
  const [count, setCount] = useState(0)

  return (
    <><div className="flex flex-col min-h-screen bg-gray-50">

      <Navbar />



      <main className="grow pt-16">
        {/* presentacion*/}
        <section id="presentacion" className="min-h-[90vh] flex items-center justify-center px-6 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 ">
            {/* Texto de presentación */}
            <div className="flex-1 text-center md:text-left space-y-6">
              <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
                Hola, mi nombre es <span className="text-primary">Brandon</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
               Soy un Ingeniero de Computación y Sistemas con más de un año de experiencia profesional en el desarrollo de aplicaciones de escritorio, web, móviles y gestión de datos (ETL). Especializado en el mantenimiento y optimización de aplicaciones empresariales utilizando stacks modernos como .NET/C#, React.js, Python, Flutter asegurando la correcta separación en capas. Enfocado en construir soluciones eficientes y escalables basadas en requerimientos de negocio reales y aprendizaje continuo.
              </p>
            </div>

            {/* Imagen (Derecha) */}
            <div className="flex-1 shrink-0">
              <img
                src={yoImg}
                alt="Foto de Brandon"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        <Formacion/>

        
        <Experience />

       
        <Skills />

       
        <ProjectCard />



      </main>

      <FooterCustom />
    </div>
    </>
  )
}

export default App
