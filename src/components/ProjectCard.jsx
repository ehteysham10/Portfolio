import { motion } from "framer-motion";

function ProjectCard({ project }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300"
        >
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                {project.title}
            </h3>

            <p className="text-gray-600 dark:text-zinc-400 mb-6">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-gray-200 dark:bg-zinc-800 text-sm text-gray-800 dark:text-gray-200"
                    >
                        {item}
                    </span>
                ))}
            </div>

            <div className="flex gap-4">
                <a
                    href={project.github}
                    className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                >
                    GitHub →
                </a>

                <a
                    href={project.demo}
                    className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                >
                    Live Demo →
                </a>
            </div>
        </motion.div>
    );
}

export default ProjectCard;