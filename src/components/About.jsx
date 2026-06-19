import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-24
                 border-t border-gray-200 dark:border-zinc-900 transition-colors duration-300"
    >
      {/* Section label */}
      <div className="mb-8 sm:mb-12">
        <p className="text-blue-500 mb-2 tracking-widest uppercase text-sm">
          About
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Full Stack Developer
        </h2>
      </div>

      {/* ── Glassmorphism Card ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative rounded-3xl overflow-hidden"
      >
        {/* Glowing orbs behind the glass */}
        <div
          className="absolute -top-20 -left-20 w-72 h-72 rounded-full
                     bg-blue-500/20 dark:bg-blue-500/15 blur-3xl pointer-events-none"
        />
        <div
          className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full
                     bg-purple-500/20 dark:bg-purple-500/10 blur-3xl pointer-events-none"
        />

        {/* Glass surface */}
        <div
          className="relative rounded-3xl p-6 sm:p-8 md:p-10
                     bg-white/60 dark:bg-white/5
                     backdrop-blur-xl
                     border border-white/80 dark:border-white/10
                     shadow-xl shadow-blue-500/5 dark:shadow-blue-500/10"
        >
          {/* Gradient top-edge highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 dark:via-blue-400/40 to-transparent" />

          {/* Content */}
          <div>

            {/* ── Bio text ── */}
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-zinc-300 leading-7 sm:leading-8 text-sm sm:text-base md:text-lg">
                I'm a Full Stack Developer from <span className="text-blue-600 dark:text-blue-400 font-medium">Lahore, Pakistan</span>, with a
                Bachelor of Science in Information Technology (BSIT). I have a strong foundation
                in computer science concepts along with hands-on experience in backend development
                using <span className="text-blue-600 dark:text-blue-400 font-medium">Node.js, Express.js, MongoDB,</span> and <span className="text-blue-600 dark:text-blue-400 font-medium">PostgreSQL</span>.
              </p>

              <p className="text-gray-700 dark:text-zinc-300 leading-7 sm:leading-8 text-sm sm:text-base md:text-lg">
                My focus is on building scalable, secure, and high-performance backend systems
                including RESTful APIs, authentication &amp; authorization systems, and real-time
                applications. Alongside backend engineering, I also develop modern and responsive
                frontend interfaces using <span className="text-blue-600 dark:text-blue-400 font-medium">React</span> and <span className="text-blue-600 dark:text-blue-400 font-medium">Tailwind CSS</span>.
              </p>

              <p className="text-gray-700 dark:text-zinc-300 leading-7 sm:leading-8 text-sm sm:text-base md:text-lg">
                I am passionate about solving real-world problems through clean architecture,
                efficient database design, and continuously improving my development skills
                through practical projects.
              </p>
            </div>
          </div>

          {/* Bottom gradient edge */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 dark:via-purple-400/20 to-transparent" />
        </div>
      </motion.div>
    </motion.section>
  );
}

export default About;