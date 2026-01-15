import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const footerCustom = () => {
    return (
        <footer id="contacto" className="p-10 flex flex-col md:flex-row gap-5 items-center justify-between bg-primary">

            <p className="text-lg text-white font-semibold">© 2026 Portafolio desarrollado por Brandon Galvez Bazalar con React & Tailwind</p>

            <div className="flex gap-3">
                <FaWhatsapp className="text-3xl cursor-pointer text-white hover:text-black" onClick={() => window.open("https://wa.me/51912701135?text=Hola%2C%20quisiera%20saber%20más%20sobre%20tus%20servicios   ", "_blank")} />
                <FaGithub className="text-3xl cursor-pointer text-white hover:text-black" onClick={() => window.open("https://github.com/bran24", "_blank")} />
                <FaLinkedin className="text-3xl cursor-pointer text-white hover:text-black" onClick={() => window.open("https://www.linkedin.com/in/robert-brandon-galvez-bazalar-926443250", "_blank")} />
                <SiGmail className="text-3xl cursor-pointer text-white hover:text-black" onClick={() => window.open("mailto:brandon2497gb@gmail.com", "_blank")} />
            </div>

        </footer>
    )
};

export default footerCustom;
