import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar({ toggleTheme, isDarkMode }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-zinc-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Ehtasham<span className="text-blue-500">.</span>
                </h1>

                <ul className="hidden md:flex gap-8 text-gray-600 dark:text-gray-300 items-center">
                    <li>
                        <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-400 hover:scale-105 transition">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#skills" className="hover:text-blue-500 dark:hover:text-blue-400 hover:scale-105 transition">
                            Skills
                        </a>
                    </li>

                    <li>
                        <a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-400 hover:scale-105 transition">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-400 hover:scale-105 transition">
                            Contact
                        </a>
                    </li>
                    <li>
                        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800 transition">
                            {isDarkMode ? '☀️' : '🌙'}
                        </button>
                    </li>
                </ul>
                <div className="md:hidden flex items-center gap-4">
                    <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800 transition text-2xl">
                        {isDarkMode ? '☀️' : '🌙'}
                    </button>
                    <button onClick={toggleMenu} className="p-2 text-gray-900 dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800 transition">
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-gray-200 dark:border-zinc-800 bg-white/90 dark:bg-black/90 backdrop-blur-md absolute w-full left-0 shadow-lg">
                    <ul className="flex flex-col px-6 py-4 space-y-4 text-gray-600 dark:text-gray-300 font-medium">
                        <li>
                            <a href="#about" onClick={toggleMenu} className="block hover:text-blue-500 dark:hover:text-blue-400 transition">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#skills" onClick={toggleMenu} className="block hover:text-blue-500 dark:hover:text-blue-400 transition">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#projects" onClick={toggleMenu} className="block hover:text-blue-500 dark:hover:text-blue-400 transition">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={toggleMenu} className="block hover:text-blue-500 dark:hover:text-blue-400 transition">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;