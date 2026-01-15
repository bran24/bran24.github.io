import { useState } from 'react';

const Navbar = () => {
    // Estado para abrir/cerrar el menú en móviles
    const [isOpen, setIsOpen] = useState(false);

    // Lista de items para no repetir código
    const menuItems = [
        { name: 'Presentacion', href: '#presentacion' },
        { name: 'Formacion', href: '#formacion' },
        { name: 'Experiencia Laboral', href: '#laboral' },
        { name: 'Habilidades', href: '#habilidades' },
        { name: 'Proyectos', href: '#proyectos' },
        { name: 'Contacto', href: '#contacto' },

    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-primary backdrop-blur-md shadow-sm z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex  md:justify-center items-center">



                {/* MENÚ DESKTOP (Visible desde md:) */}
                <ul className="hidden md:flex gap-8">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <a href={item.href} className="text-white text-[20px] hover:text-black transition-colors font-medium">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* BOTÓN MENÚ MÓVIL */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                    {/* Icono dinámico: X si está abierto, Hamburguesa si está cerrado */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* LISTA DE ITEMS MÓVIL (Se muestra solo si isOpen es true) */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100 animate-fadeIn`}>
                <ul className="flex flex-col p-4">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                onClick={() => setIsOpen(false)} // Cierra el menú al hacer click
                                className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;