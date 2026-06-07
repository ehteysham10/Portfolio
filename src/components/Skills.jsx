import { motion } from "framer-motion";
import { Layout, Server, Database, Wrench } from "lucide-react";

const skillGroups = [
    {
        title: "Frontend",
        icon: Layout,
        skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
        title: "Backend",
        icon: Server,
        skills: ["Node.js", "Express.js", "REST APIs", "JWT", "OAuth"],
    },
    {
        title: "Database",
        icon: Database,
        skills: ["MongoDB", "PostgreSQL", "Mongoose"],
    },
    {
        title: "Tools",
        icon: Wrench,
        skills: ["Git", "GitHub", "Postman", "Firebase", "Cloudinary"],
    },
];

function Skills() {
    return (
        <motion.section
            id="skills"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-6 py-24"
        >
            <p className="text-blue-500 mb-3">Skills</p>

            <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
                Technologies I Work With
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillGroups.map((group) => {
                    const Icon = group.icon;
                    return (
                        <div
                            key={group.title}
                            className="bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-6 transition-colors duration-300"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Icon className="w-6 h-6 text-blue-500" />
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {group.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 rounded-full bg-gray-200 dark:bg-zinc-800 text-sm text-gray-800 dark:text-gray-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </motion.section>
    );
}

export default Skills;