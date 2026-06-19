import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar({ toggleTheme, isDarkMode }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="sticky top-0 z-50 transition-colors duration-300
                        backdrop-blur-xl bg-white/40 dark:bg-black/40
                        shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
            {/* Gradient border bottom */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-400/20 to-transparent" />
            
            <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white drop-shadow-sm">
                    Ehtasham<span className="text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">.</span>
                </h1>

                <ul className="hidden md:flex gap-2 text-gray-700 dark:text-gray-300 items-center font-medium">
                    {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                        <li key={item}>
                            <a 
                                href={`#${item.toLowerCase()}`} 
                                className="px-4 py-2 rounded-full hover:bg-white/60 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 inline-block"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                    <li className="ml-2">
                        <button onClick={toggleTheme} className="p-2 rounded-full bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 border border-gray-200/50 dark:border-white/10 transition-all duration-300 shadow-sm">
                            {isDarkMode ? '☀️' : '🌙'}
                        </button>
                    </li>
                </ul>
                <div className="md:hidden flex items-center gap-4">
                    <button onClick={toggleTheme} className="p-2 rounded-full bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 border border-gray-200/50 dark:border-white/10 transition-all duration-300 shadow-sm text-xl">
                        {isDarkMode ? '☀️' : '🌙'}
                    </button>
                    <button onClick={toggleMenu} className="p-2 text-gray-900 dark:text-white rounded-full bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 border border-gray-200/50 dark:border-white/10 transition-all duration-300 shadow-sm">
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full backdrop-blur-xl bg-white/80 dark:bg-black/80 border-b border-gray-200/50 dark:border-zinc-800/50 shadow-xl">
                    <ul className="flex flex-col px-4 py-4 space-y-2 text-gray-700 dark:text-gray-300 font-medium">
                        {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                            <li key={item}>
                                <a 
                                    href={`#${item.toLowerCase()}`} 
                                    onClick={toggleMenu} 
                                    className="block px-4 py-3 rounded-xl hover:bg-white/60 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;