import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <motion.section
            id="projects"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-24 border-t border-gray-200 dark:border-zinc-900 transition-colors duration-300"
        >
            {/* Ambient glowing background orbs */}
            <div className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-3xl pointer-events-none" />
            <div className="mb-12">
                <p className="text-blue-500 mb-2 tracking-widest uppercase text-sm">
                    Projects
                </p>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    Featured Work
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </motion.section>
    );
}

export default Projects;