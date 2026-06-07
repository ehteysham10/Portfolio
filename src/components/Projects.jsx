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
            className="max-w-7xl mx-auto px-6 py-24"
        >
            <div className="mb-12">
                <p className="text-blue-500 mb-2 tracking-widest uppercase text-sm">
                    Projects
                </p>

                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                    Featured Work
                </h2>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
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