import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const getBackgroundColor = () => {
        switch (location.pathname) {
            case '/':
                return 'bg-primary-dark'; // Home page
            default:
                return 'bg-primary-dark'; // Default
        }
    };

    return (
        <header
            className={`${getBackgroundColor()} font-sans p-4 shadow-md fixed top-0 left-0 w-full z-50`}
        >
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/" onClick={() => setMenuOpen(false)}>
                    <h1 className="text-lg md:text-xl text-primary-light font-bold">VZAD</h1>
                </Link>

                {/* Hamburger Menu for Small Screens */}
                <button
                    className="md:hidden text-primary-light text-3xl focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <HiX /> : <HiMenu />}
                </button>

                {/* Navigation Menu */}
                <div
                    className={`fixed inset-0 ${menuOpen ? 'bg-primary-dark' : ''} text-primary-light z-40 flex flex-col items-center justify-center space-y-6 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'
                        } transition-transform duration-300 md:static md:transform-none md:flex md:flex-row md:space-y-0 md:space-x-6`}
                >
                    {/* Close Button for Mobile Menu */}
                    <button
                        className="md:hidden absolute top-4 right-4 text-3xl text-primary-light focus:outline-none"
                        onClick={() => setMenuOpen(false)}
                    >
                        <HiX />
                    </button>

                    <nav className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-6">
                        <Link
                            to="/"
                            className="text-lg md:text-base hover:underline"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/resorts"
                            className="text-lg md:text-base hover:underline"
                            onClick={() => setMenuOpen(false)}
                        >
                            Resort
                        </Link>
                    </nav>

                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                        <Link to="/resorts">
                            <button
                                className="bg-primary-light text-primary-dark px-4 py-2 rounded-md hover:bg-gray-300 transition duration-200"
                                onClick={() => setMenuOpen(false)}
                            >
                                Book Now
                            </button>
                        </Link>

                        <Link to="/login">
                            <button
                                className="bg-transparent border border-primary-light text-primary-light px-4 py-2 rounded-md hover:bg-primary-light hover:text-primary-dark transition duration-200"
                                onClick={() => setMenuOpen(false)}
                            >
                                Log In
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
