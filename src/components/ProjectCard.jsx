import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, ChevronDown, Wrench } from "lucide-react";

const GithubIcon = ({ size = 16, className = "" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a12.8 12.8 0 0 0-7 0C6.2 3.5 5 3.9 5 3.9a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3 11.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
    </svg>
);

function ProjectCard({ project }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const hasMultipleRepos = typeof project.github === "object" && project.github !== null;

    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative flex flex-col justify-between h-full bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 rounded-2xl p-6 shadow-lg shadow-blue-500/5 dark:shadow-blue-500/5 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/10 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 overflow-visible"
        >
            {/* Gradient top-edge highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 dark:via-blue-400/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Top Section: Content */}
            <div className="relative z-10">
                <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                    </h3>
                    {project.inProgress && (
                        <span className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-400/15 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400 border border-amber-400/30 dark:border-amber-400/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                            </span>
                            In Progress
                        </span>
                    )}
                </div>

                <p className="text-gray-600 dark:text-zinc-400 mb-6 text-sm leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((item, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 rounded-md bg-white/40 dark:bg-white/5 backdrop-blur-md text-xs font-medium text-gray-700 dark:text-zinc-300 border border-white/60 dark:border-white/10"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* Bottom Section: Buttons (Hamesha perfect line me align rahenge) */}
            <div className="relative z-10 flex gap-3 pt-4 border-t border-white/40 dark:border-white/10 mt-auto">
                {project.github && !hasMultipleRepos && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-white/30 hover:bg-white/50 dark:bg-white/5 dark:hover:bg-white/10 text-gray-900 dark:text-white border border-white/50 dark:border-white/10 backdrop-blur-md transition-all duration-200"
                    >
                        <GithubIcon size={16} />
                        Source
                    </a>
                )}

                {hasMultipleRepos && (
                    <div className="flex-1 relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-white/30 hover:bg-white/50 dark:bg-white/5 dark:hover:bg-white/10 text-gray-900 dark:text-white border border-white/50 dark:border-white/10 backdrop-blur-md transition-all duration-200"
                        >
                            <Code2 size={16} />
                            Code
                            <ChevronDown
                                size={14}
                                className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                            />
                        </button>

                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute left-0 bottom-[calc(100%+0.5rem)] w-full min-w-[180px] bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl shadow-2xl shadow-blue-500/10 z-50 p-2"
                                >
                                    <div className="flex flex-col gap-1">
                                        {project.github.frontend && (
                                            <a
                                                href={project.github.frontend}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/item flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 dark:text-zinc-300 rounded-lg hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-500/10 dark:hover:text-blue-400 transition-all duration-200"
                                                onClick={() => setIsDropdownOpen(false)}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <GithubIcon size={18} className="text-gray-500 group-hover/item:text-blue-600 dark:text-zinc-400 dark:group-hover/item:text-blue-400 transition-colors" />
                                                    Frontend
                                                </div>
                                                <ExternalLink size={16} className="opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                                            </a>
                                        )}
                                        {project.github.backend && (
                                            <a
                                                href={project.github.backend}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/item flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 dark:text-zinc-300 rounded-lg hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-500/10 dark:hover:text-blue-400 transition-all duration-200"
                                                onClick={() => setIsDropdownOpen(false)}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <GithubIcon size={18} className="text-gray-500 group-hover/item:text-blue-600 dark:text-zinc-400 dark:group-hover/item:text-blue-400 transition-colors" />
                                                    Backend
                                                </div>
                                                <ExternalLink size={16} className="opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}

                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-500/20 transition-all duration-200"
                    >
                        <ExternalLink size={16} />
                        Live Demo
                    </a>
                )}
            </div>
        </motion.div>
    );
}

export default ProjectCard;