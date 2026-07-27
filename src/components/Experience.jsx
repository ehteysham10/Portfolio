import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Backend Developer",
    company: "Senew Tech",
    location: "Lahore, Pakistan",
    period: "Jan 2026 – Present",
    type: "Full-Time",
    current: true,
    bullets: [
      "Architected backend infrastructure for Opulence Music Group, implementing secure JWT authentication and automated workflows.",
      "Streamlined media management by integrating cloud storage for high-fidelity MP3 uploads and low-latency streaming.",
      "Developed core backend for Doveway, engineering multi-tiered auth pipelines and Stripe identity verification.",
      "Engineered secure payment architectures, incorporating Stripe webhook listeners and a custom Split-Code verification system.",
      "Optimized MongoDB performance through advanced schema design and indexing, reducing API query execution times.",
    ],
  },
  {
    title: "Backend Development Trainee",
    company: "ByteLift Solutions",
    location: "Remote",
    period: "Jul 2025 – Aug 2025",
    type: "Internship",
    current: false,
    bullets: [
      "Built and tested robust backend APIs using Node.js, Express.js, and MongoDB to enhance core application functionality.",
      "Worked closely on database architecture design and backend logic debugging during rapid, test-driven development sprints.",
    ],
  },
];

function ExperienceCard({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 sm:pl-10"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 flex flex-col items-center">
        <div
          className={`w-4 h-4 rounded-full border-2 z-10 ${
            exp.current
              ? "bg-blue-500 border-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.6)]"
              : "bg-zinc-400 dark:bg-zinc-600 border-zinc-300 dark:border-zinc-500"
          }`}
        />
      </div>

      {/* Card */}
      <div className="relative rounded-2xl overflow-hidden">
        <div
          className="relative p-5 sm:p-6
                     bg-white/60 dark:bg-white/5
                     backdrop-blur-xl
                     border border-white/80 dark:border-white/10
                     shadow-lg shadow-blue-500/5 dark:shadow-blue-500/10
                     rounded-2xl"
        >
          {/* Top highlight line */}
          <div
            className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${
              exp.current
                ? "via-blue-400/70 dark:via-blue-400/50"
                : "via-zinc-400/40 dark:via-zinc-500/30"
            } to-transparent`}
          />

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                {exp.title}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mt-0.5">
                {exp.company}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:text-right">
              {exp.current && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-400/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  Current
                </span>
              )}
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/8 text-gray-600 dark:text-zinc-400 border border-gray-200/60 dark:border-white/10">
                {exp.type}
              </span>
            </div>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-xs text-gray-500 dark:text-zinc-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {exp.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {exp.location}
            </span>
          </div>

          {/* Bullets */}
          <ul className="space-y-2">
            {exp.bullets.map((point, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700 dark:text-zinc-300 leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/70 dark:bg-blue-400/60 flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-24
                 border-t border-gray-200 dark:border-zinc-900 transition-colors duration-300"
    >
      {/* Section label */}
      <div className="mb-10 sm:mb-14">
        <p className="text-blue-500 mb-2 tracking-widest uppercase text-sm">
          Experience
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Work Experience
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] sm:left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-blue-400/60 via-zinc-300/40 dark:via-zinc-700/40 to-transparent" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;
