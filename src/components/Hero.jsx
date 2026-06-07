import { motion } from "framer-motion";
import { Download } from "lucide-react";

function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-6 py-24 md:py-36"
        >
            <p className="text-blue-500 mb-4">
                👋 Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-gray-900 to-blue-500 dark:from-white dark:via-white dark:to-blue-500 bg-clip-text text-transparent">
                Ehtasham Ul Haq
            </h1>

            <h2 className="text-2xl md:text-4xl text-gray-600 dark:text-zinc-400 mt-4">
                Full Stack Developer
            </h2>

            <p className="max-w-2xl mt-8 text-gray-600 dark:text-zinc-400 text-lg leading-8">
                Full Stack Developer specializing in backend systems using
                Node.js, Express.js, MongoDB, and PostgreSQL. I build secure APIs,
                authentication systems, real-time applications, and modern React
                frontends that deliver exceptional user experiences.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
                <a
                    href="#projects"
                    className="bg-blue-600 text-white hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 px-6 py-3 rounded-xl font-medium inline-block"
                >
                    View Projects
                </a>

                <a
                    href="#contact"
                    className="border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white hover:border-gray-900 dark:hover:border-white hover:bg-gray-100 dark:hover:bg-white dark:hover:text-black px-6 py-3 rounded-xl transition duration-300 inline-block"
                >
                    Contact Me
                </a>

                <a
                    href="/resume.pdf"
                    download="Ehtisham_Ul_Haq_Resume.pdf"
                    className="flex items-center gap-2 border border-blue-500 text-blue-600 dark:text-blue-400 dark:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 px-6 py-3 rounded-xl transition duration-300 font-medium"
                >
                    <Download className="w-5 h-5" />
                    Download Resume
                </a>
            </div>

            <div className="mt-16 bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 shadow-xl transition-colors duration-300">
                <pre className="text-green-600 dark:text-green-400 overflow-x-auto">
                    {`const developer = {
  name: "Ehtasham Ul Haq",
  role: "Full Stack Developer",
  strongestSkill: "Backend Development",
  stack: [
    "React",
    "TypeScript"
    "Node.js",
    "Express",
    "MongoDB"
  ]
};`}
                </pre>
            </div>
        </motion.section>
    );
}

export default Hero;