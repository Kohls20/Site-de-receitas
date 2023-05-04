import { Link } from "react-router-dom";
import CloseButton from "../img/CloseButton.svg";

function Menu({ isOpen, onClose }) {
    return (
        <div
            className={`
            text-black
            dark:text-orange-300 
            h-screen
            text-center
            text-4xl
            bg-white
            dark:bg-gray-900
            fixed 
            top-0 
            left-0 
            right-0 
            bottom-0 
            z-50 
            transition-all 
            duration-500 
            ${
                isOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            }`}
        >
            <div className="blur-[100px] dark:blur-[130px] absolute w-72 h-72 -z-10 bg-orange-400  top-0 left-0 bottom-16 right-11"></div>
            <div className="blur-[100px] dark:blur-[130px] absolute w-72 h-72 -z-10 bg-blue  bottom-0 right-0"></div>
            <button onClick={onClose} className="absolute top-2 right-2">
                <img className="w-14" src={CloseButton} alt="" />
            </button>
            <ul className="z-50 w-full h-full flex flex-col mt-52 justify-start">
                <li className="p-4">
                    <Link to="/receitas" onClick={onClose}>
                        Receitas
                    </Link>
                </li>
                <li className="p-4">
                    <Link to="/sobrenos" onClick={onClose}>
                        Sobre nós
                    </Link>
                </li>
                <li className="p-4">
                    <Link to="/contatos" onClick={onClose}>
                        Contatos
                    </Link>
                </li>
            </ul>
        </div>
    );
}
export default Menu;
