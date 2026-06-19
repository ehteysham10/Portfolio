import { motion } from "framer-motion";

function ProjectCard({ project }) {
    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative flex flex-col justify-between h-full bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 rounded-2xl p-6 shadow-lg shadow-blue-500/5 dark:shadow-blue-500/5 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/10 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
        >
            {/* Gradient top-edge highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 dark:via-blue-400/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Top Section: Content */}
            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white tracking-tight group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                </h3>

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
            <div className="relative z-10 flex gap-3 pt-4 border-t border-white/40 dark:border-white/10">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2.5 rounded-xl text-sm font-medium bg-white/30 hover:bg-white/50 dark:bg-white/5 dark:hover:bg-white/10 text-gray-900 dark:text-white border border-white/50 dark:border-white/10 backdrop-blur-md transition-all duration-200"
                    >
                        GitHub →
                    </a>
                )}

                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2.5 rounded-xl text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-500/20 transition-all duration-200"
                    >
                        Live Demo →
                    </a>
                )}
            </div>
        </motion.div>
    );
}

export default ProjectCard;