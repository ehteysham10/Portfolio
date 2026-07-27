import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const certifications = [
  {
    title: "Developing Back-End Apps with Node.js and Express",
    issuer: "IBM · Coursera",
  },
  {
    title: "Mastering Data Structures & OOP",
    issuer: "Udemy",
  },
];

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
          MERN Stack Developer
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
          <div className="space-y-7">

            {/* ── Bio text ── */}
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-zinc-300 leading-7 sm:leading-8 text-sm sm:text-base md:text-lg">
                I'm a <span className="text-blue-600 dark:text-blue-400 font-medium">Junior MERN Stack Developer</span> with
                6+ months of hands-on professional experience building and deploying production-grade
                backend systems, optimized RESTful APIs, and responsive frontends. I hold a Bachelor's
                degree in Information Technology from{" "}
                <span className="text-blue-600 dark:text-blue-400 font-medium">Virtual University of Pakistan</span>.
              </p>

              <p className="text-gray-700 dark:text-zinc-300 leading-7 sm:leading-8 text-sm sm:text-base md:text-lg">
                I specialize in{" "}
                <span className="text-blue-600 dark:text-blue-400 font-medium">JavaScript, TypeScript, Node.js, Express.js,</span>{" "}
                and <span className="text-blue-600 dark:text-blue-400 font-medium">React.js</span>, with deep expertise in
                secure database design, real-time{" "}
                <span className="text-blue-600 dark:text-blue-400 font-medium">WebSocket (Socket.IO)</span> applications, and
                cloud deployments on Vercel &amp; Render. I'm driven by clean architecture, scalable
                systems, and turning complex problems into elegant, efficient solutions.
              </p>
            </div>

            {/* ── Divider ── */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-zinc-700 to-transparent" />

            {/* ── Education ── */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-4 h-4 text-blue-500" />
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-zinc-500">
                  Education
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white">
                    Bachelors in Information Technology
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-0.5">
                    Virtual University of Pakistan
                  </p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-white/8 text-gray-500 dark:text-zinc-400 border border-gray-200/60 dark:border-white/10 whitespace-nowrap self-start mt-0.5">
                  2022 – 2026
                </span>
              </div>
            </motion.div>

            {/* ── Divider ── */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-zinc-700 to-transparent" />

            {/* ── Certifications ── */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-blue-500" />
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-zinc-500">
                  Certifications
                </span>
              </div>
              <div className="flex flex-col gap-2.5">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl
                               bg-gray-50/80 dark:bg-white/5
                               border border-gray-200/60 dark:border-white/8"
                  >
                    <span className="mt-0.5 w-2 h-2 rounded-full bg-blue-500/80 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-800 dark:text-zinc-200 leading-snug">
                        {cert.title}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-zinc-500 mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Bottom gradient edge */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 dark:via-purple-400/20 to-transparent" />
        </div>
      </motion.div>
    </motion.section>
  );
}

export default About;