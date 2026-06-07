function Navbar({ toggleTheme, isDarkMode }) {
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
                <div className="md:hidden">
                    <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800 transition text-2xl">
                        {isDarkMode ? '☀️' : '🌙'}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;