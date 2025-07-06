import React, { useState, useEffect } from 'react'
import { Menu, X, Code } from 'lucide-react';
import ThemeToggle from './ThemeController';


function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-gray-200/20 dark:border-gray-700/20'
            : 'dark:bg-gray-900 bg-white'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-2">
                        <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                        <span className="text-xl font-bold text-gray-900 dark:text-white">Portfolio</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                // onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                            >
                                {item}
                            </a>
                        ))}
                        <ThemeToggle />
                    </nav>

                    {/* Mobile Menu Button and Theme Toggle */}
                    <div className="md:hidden flex items-center space-x-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200/20 dark:border-gray-700/20 py-4">
                        <nav className="flex flex-col space-y-4">
                            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                                >
                                    {item}
                                </button>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Navbar