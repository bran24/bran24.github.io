import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import yoImg from './assets/yo.png'
import Navbar from './componenetes/navbar'
import Experience from './componenetes/Experiencia'
import Skills from './componenetes/skills'
import ProjectCard from './componenetes/proyectos'
import FooterCustom from './componenetes/FooterCustom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <><div class="flex flex-col min-h-screen bg-gray-50">

      <Navbar />



      <main className="flex-grow pt-16 ">
        {/* presentacion*/}
        <section id="presentacion" className="min-h-[90vh] flex items-center justify-center px-6 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 ">
            {/* Texto de presentación */}
            <div className="flex-1 text-center md:text-left space-y-6">
              <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
                Hola, mi nombre es <span className="text-primary">Brandon</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Soy Bachiller de la carrera de Ingeniería de computación y sistemas, motivado a cumplir las expectativas de la empresa y demostrar sus conocimientos y habilidades obtenidas para que la organización pueda lograr sus objetivos de manera eficiente. Deseoso de conseguir una oportunidad de trabajo estable luego de demostrar sus capacidades.
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

        <section id="formacion" className="py-20 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">Formacion</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Aquí irían tus tarjetas de formacion */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className='flex justify-between'>
                <h3 className="text-lg font-semibold mb-2">Universidad Privada Antenor Orrego</h3>
                <p className="text-gray-600 font-bold">2016 - 2022</p>
              </div>
              <p className="text-gray-600">Ingeniería de Computación y Sistemas</p>
            </div>

          </div>
        </section>

        {/* SECCIÓN PROYECTOS */}
        <section id="laboral" className="py-20 max-w-4xl mx-auto px-4">
          <Experience />



        </section>
        {/* SECCIÓN HABILIDADES */}
        <section id="habilidades" className="py-20 ">
          <Skills />

        </section>


        <section id="proyectos" className="py-20 max-w-7xl mx-auto px-4">
          <ProjectCard />



        </section>






      </main>

      <FooterCustom />
    </div>
    </>
  )
}

export default App
