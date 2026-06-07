import { motion } from "framer-motion";

function About() {
    return (
        <motion.section
            id="about"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-200 dark:border-zinc-900 transition-colors duration-300"
        >
            <div className="mb-12">
                <p className="text-blue-500 mb-2 tracking-widest uppercase text-sm">
                    About
                </p>

                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                    Full Stack Developer
                </h2>
            </div>

            <p className="max-w-4xl text-gray-600 dark:text-zinc-400 leading-8 text-lg">
                I’m a Full Stack Developer from Lahore, Pakistan, with a Bachelor of Science in Information Technology (BSIT). I have a strong foundation in computer science concepts along with hands-on experience in backend development using Node.js, Express.js, MongoDB, and PostgreSQL.

                My focus is on building scalable, secure, and high-performance backend systems including RESTful APIs, authentication & authorization systems, and real-time applications.

                Alongside backend engineering, I also develop modern and responsive frontend interfaces using React and Tailwind CSS, allowing me to work across the full stack and deliver complete end-to-end web solutions.

                I am passionate about solving real-world problems through clean architecture, efficient database design, and continuously improving my development skills through practical projects.
            </p>

            <p className="max-w-4xl text-gray-600 dark:text-zinc-400 leading-8 text-lg mt-6">
                My primary focus is designing scalable APIs, authentication
                systems, database architectures, and real-time applications.
                Alongside backend development, I build modern frontend
                applications using React and Tailwind CSS.
            </p>
        </motion.section>
    );
}

export default About;