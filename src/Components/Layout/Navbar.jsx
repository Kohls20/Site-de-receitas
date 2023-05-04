import { useState } from "react";

import Menu from "../Menu";
import MenuButton from "../MenuButton";

import { Link } from "react-router-dom";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleMenuClick() {
        setMenuOpen(!menuOpen);
    }

    function handleCloseMenu() {
        setMenuOpen(false);
    }

    return (
        <nav
            className="
            w-full 
            h-16
            p-3
            bg-orange-800 
            dark:bg-dark-blue
            flex 
            justify-between
            "
        >
            <Link to="/">
                <img src="./src/img/home.png" alt="Home" className="w-24" />
            </Link>

            <MenuButton
                isOpen={menuOpen}
                onClick={handleMenuClick}
            ></MenuButton>

            <Menu isOpen={menuOpen} onClose={handleCloseMenu}></Menu>
        </nav>
    );
}
