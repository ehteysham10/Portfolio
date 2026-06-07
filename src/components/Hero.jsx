import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { Typewriter } from 'react-simple-typewriter';

function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-6 py-24 md:py-36 flex flex-col md:flex-row items-center justify-between gap-12"
        >
            <div className="flex-1 w-full">
                <p className="text-blue-500 mb-4">
                    👋 Hello, I'm
                </p>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-gray-900 to-blue-500 dark:from-white dark:via-white dark:to-blue-500 bg-clip-text text-transparent">
                    Ehtasham Ul Haq
                </h1>

                <h2 className="text-2xl md:text-4xl text-gray-600 dark:text-zinc-400 mt-4 h-8 md:h-10">
                    <Typewriter
                        words={['Full Stack Developer', 'Mern Stack Developer']}
                        loop={0}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
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
                        className="flex items-center gap-2 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white hover:border-gray-900 dark:hover:border-white hover:bg-gray-100 dark:hover:bg-white dark:hover:text-black px-6 py-3 rounded-xl transition duration-300 font-medium group"
                    >
                        <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Contact Me
                    </a>

                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                        <a
                            href="/resume.pdf"
                            download="Ehtisham_Ul_Haq_Resume.pdf"
                            className="relative flex items-center gap-2 bg-white dark:bg-zinc-950 border border-blue-500/50 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-xl transition duration-300 font-medium hover:bg-blue-50 dark:hover:bg-blue-500/10"
                        >
                            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                            Download Resume
                        </a>
                    </div>
                </div>

                <div className="mt-16 bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 shadow-xl transition-colors duration-300">
                    <pre className="text-green-600 dark:text-green-400 overflow-x-auto">
                        {`const developer = {
  name: "Ehtasham Ul Haq",
  role: "Full Stack Developer",
  strongestSkill: "Backend Development",
  stack: [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB"
  ]
};`}
                    </pre>
                </div>
            </div>

            <motion.div
                className="flex-1 w-full flex justify-center md:justify-end"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl group">
                    <img
                        src="/Hero.jpg"
                        onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = "/Hero.jpeg";
                        }}
                        alt="Ehtasham Ul Haq"
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 dark:brightness-90 dark:contrast-[1.15]"
                    />
                    {/* Subtle overlay to blend the bright image with the dark theme */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent dark:from-black/40 dark:via-transparent dark:to-transparent pointer-events-none"></div>
                </div>
            </motion.div>
        </motion.section>
    );
}

export default Hero;