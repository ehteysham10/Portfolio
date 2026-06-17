import { motion } from "framer-motion";

function ProjectCard({ project }) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-col justify-between h-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300"
        >
            {/* Top Section: Content */}
            <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white tracking-tight">
                    {project.title}
                </h3>

                <p className="text-gray-600 dark:text-zinc-400 mb-6 text-sm leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((item, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 rounded-md bg-gray-100 dark:bg-zinc-800/60 text-xs font-medium text-gray-700 dark:text-zinc-300 border border-gray-200/50 dark:border-zinc-700/30"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* Bottom Section: Buttons (Hamesha perfect line me align rahenge) */}
            <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-zinc-800/50">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2.5 rounded-xl text-sm font-medium bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-900 dark:text-white border border-gray-200 dark:border-zinc-700 transition-all duration-200"
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