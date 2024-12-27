 "use client";

 import React from "react";
 import { useState } from "react";
 import Link from "next/link";
 import { FaShoppingCart } from "react-icons/fa";
  import { HiMenuAlt3 } from "react-icons/hi";
 import { HiX } from "react-icons/hi";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);  //toggle menu open/close
    }; 

    const closeMenu = () => {
        setIsMenuOpen(false); //closes the menu
    };

    return (
        <header className="bg-blue-800 text-white py-5 flex justify-between items-center px-10 relative z-10">
            <h1 className="text-2xl font-bold">Rim City</h1> 

            {/* desktop navbar */}
            <nav className="text-white md:flex gap-10 font-bold">
            <Link href="/"  onClick={closeMenu}>Home</Link>
            <Link href="/about" onClick={closeMenu}>About</Link>
            <Link href="/rims" onClick={closeMenu}>Rims</Link>
            <Link href="/contact" onClick={closeMenu}>Contact</Link>
            <FaShoppingCart className="text-white text-xl"/>
            </nav>

            {/* mobile navbar (hamburger menu) */}

            <div className="md:hidden flex items-center">
                <HiMenuAlt3 
                className="text-white text-3xl cursor-pointer" 
                onClick ={toggleMenu} // toggle menu on click 
                />
            </div>

            {/* mobile menu */}

            <div
            className={`${
                isMenuOpen? 'block' : 'hidden'
                } absolute top-0 left-0 w-full bg-blue-950 p-5 md:hidden z-20`}>

                    {/* close button */}
                    <div className="flex justify-end">
                        <HiX
                        className="text-white text-3xl cursor-pointer"
                        onClick ={toggleMenu}  //close menu when cicked
                        />
                    </div>

                    <nav className="flex flex-row items-center gap-3 text-white font-bold">
            <Link href="/"  onClick={closeMenu}>Home</Link>
            <Link href="/about" onClick={closeMenu}>About</Link>
            <Link href="/rims" onClick={closeMenu}>Rims</Link>
            <Link href="/contact" onClick={closeMenu}>Contact</Link>
            <FaShoppingCart className="text-white text-xl"/>
            </nav>


                </div>

        

        </header>
    );
};

export default Header;

