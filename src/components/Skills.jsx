import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── SVG Tech Logos ─────────────────────────────────────────
   All logos are inline SVGs — no external requests needed.
   ────────────────────────────────────────────────────────── */

const logos = {
  /* ── Frontend ── */
  React: (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <circle cx="64" cy="64" r="11.4" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="5" fill="none">
          <ellipse rx="47" ry="18" cx="64" cy="64"/>
          <ellipse rx="47" ry="18" cx="64" cy="64" transform="rotate(60 64 64)"/>
          <ellipse rx="47" ry="18" cx="64" cy="64" transform="rotate(120 64 64)"/>
        </g>
      </g>
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="8" fill="#F7DF1E"/>
      <path d="M32 96l9.3-5.6c1.8 3.2 3.4 5.9 7.3 5.9 3.7 0 6.1-1.5 6.1-7.1V53.8h11.4v35.5c0 11.7-6.9 17.1-16.9 17.1-9.1 0-14.3-4.7-17.2-10.4zM79 95l9.3-5.4c2.4 3.9 5.6 6.8 11.2 6.8 4.7 0 7.7-2.4 7.7-5.6 0-3.9-3.1-5.3-8.3-7.5l-2.9-1.2c-8.2-3.5-13.6-7.9-13.6-17.2 0-8.6 6.5-15.1 16.7-15.1 7.3 0 12.5 2.5 16.2 9.1l-8.9 5.7c-2-3.5-4.1-4.9-7.4-4.9-3.4 0-5.5 2.1-5.5 4.9 0 3.4 2.1 4.8 7 6.9l2.9 1.2c9.7 4.1 15.1 8.4 15.1 17.9 0 10.2-8 15.9-18.8 15.9-10.5 0-17.3-5-20.7-11.5z" fill="#000"/>
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="8" fill="#3178C6"/>
      <path d="M22 76.5V68h84v8.5H73V106H55V76.5H22z" fill="#fff"/>
      <path d="M105 68v9.5h-17V106H70V77.5H53V68h52z" fill="#fff"/>
    </svg>
  ),
  HTML5: (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.5 12l9.5 107 35 10 35-10 9.5-107H19.5z" fill="#E44D26"/>
      <path d="M64 120.5l28.3-7.9 8.1-91H64V120.5z" fill="#F16529"/>
      <path d="M64 66h-16l-1.1-12H64V42H34.3l3.3 37h26.4V66zM64 96l-.1.1-13.5-3.6-.9-9.7H37.5l1.7 19.5 24.7 6.9.1-.1V96z" fill="#fff"/>
      <path d="M64 66v12h15l-1.4 16.5-13.6 3.6v12.2l24.7-6.9L92 66H64zM79.3 42H64v12h27.2L79.3 42z" fill="#EBEBEB"/>
    </svg>
  ),
  CSS3: (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.8 11l9.5 107.2 35.6 9.8 35.6-9.8 9.5-107.2H18.8z" fill="#1572B6"/>
      <path d="M64 117.7l28.9-8 8.1-90.7H64v98.7z" fill="#33A9DC"/>
      <path d="M64 56H47.5l-1.1-12.4H64V32.2H34.3l.3 3.5 3.1 35h26.3V56zM64 89.3l-.1.1-13.2-3.6-.9-9.6H38.2l1.6 18.8 24.1 6.7.1-.1V89.3z" fill="#fff"/>
      <path d="M63.9 56v11.4h14.8l-1.5 16.5-13.3 3.6v11.4l24.2-6.7 3.3-36.2H63.9zM78.5 43.6H64V32.2h26.5L78.5 43.6z" fill="#EBEBEB"/>
    </svg>
  ),
  "Tailwind CSS": (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <path d="M64 16C43.6 16 31.6 26.4 28 47.1c5.6-7.5 12.2-10.3 19.7-8.4 4.3 1.1 7.3 4.2 10.7 7.6C64 52 69.9 58.3 83.9 58.3c20.4 0 32.4-10.4 36-31.1-5.6 7.5-12.1 10.3-19.6 8.4-4.3-1.1-7.4-4.2-10.7-7.6C84 22.2 78.1 16 64 16zM28 58.3C7.6 58.3-4.4 68.7 0 89.4c5.6-7.5 12.2-10.3 19.7-8.4 4.3 1.1 7.3 4.2 10.7 7.6C36 94.2 41.9 100.5 55.9 100.5c20.4 0 32.4-10.4 36-31.1-5.6 7.5-12.1 10.3-19.6 8.4-4.3-1.1-7.4-4.2-10.7-7.6C56 64.5 50.1 58.3 36 58.3H28z" fill="#38BDF8"/>
    </svg>
  ),
  /* ── Backend ── */
  "Node.js": (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <path d="M64 8.6L10.3 40v62.7L64 134.2l53.7-31.5V40L64 8.6z" fill="#6DA55F"/>
      <path d="M64 8.6v125.6l53.7-31.5V40L64 8.6z" fill="#3E863D"/>
      <path d="M64 38.5c-1.8 0-3.3 1-4.1 2.5L42.7 70.3c-.4.7-.6 1.5-.6 2.2 0 2.7 2.2 4.8 4.8 4.8 1.8 0 3.3-1 4.1-2.5l4.3-7.5h17.4l4.3 7.5c.8 1.5 2.3 2.5 4.1 2.5 2.7 0 4.8-2.2 4.8-4.8 0-.8-.2-1.6-.6-2.2L68.1 41c-.8-1.5-2.3-2.5-4.1-2.5zm0 14.7l5.4 9.4H58.6l5.4-9.4z" fill="#fff"/>
    </svg>
  ),
  "Express.js": (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <path d="M126.7 64c0 34.6-28.1 62.7-62.7 62.7S1.3 98.6 1.3 64 29.4 1.3 64 1.3 126.7 29.4 126.7 64z" fill="#353535"/>
      <path d="M92.6 61.2l-26.7 26.7c-.6.6-1.5.6-2.1 0L37.1 61.2c-.6-.6-.6-1.5 0-2.1l3-3c.6-.6 1.5-.6 2.1 0L64 77.9l21.8-21.8c.6-.6 1.5-.6 2.1 0l3 3c.5.6.5 1.5-.3 2.1zM92.6 49.1L64 77.9 35.4 49.1c-.6-.6-.6-1.5 0-2.1l3-3c.6-.6 1.5-.6 2.1 0L64 67.8l23.5-23.8c.6-.6 1.5-.6 2.1 0l3 3c.6.6.6 1.6 0 2.1z" fill="#fff"/>
    </svg>
  ),
  "REST APIs": (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="12" fill="#3b82f6"/>
      <text x="50%" y="56%" textAnchor="middle" dominantBaseline="middle" fontSize="18" fontFamily="monospace" fontWeight="bold" fill="white">REST</text>
      <text x="50%" y="76%" textAnchor="middle" dominantBaseline="middle" fontSize="13" fontFamily="monospace" fill="#bfdbfe">API</text>
    </svg>
  ),
  JWT: (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="12" fill="#000"/>
      <path d="M64 16L56 56H72L64 16zM64 112L72 72H56L64 112z" fill="#fff"/>
      <path d="M64 56L24 64L64 72L104 64z" fill="#FB015B" opacity="0.9"/>
      <circle cx="64" cy="64" r="12" fill="#FB015B"/>
      <circle cx="64" cy="64" r="6" fill="#fff"/>
    </svg>
  ),
  OAuth: (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="12" fill="#EB5424"/>
      <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fontSize="22" fontFamily="sans-serif" fontWeight="bold" fill="white">OAuth</text>
      <text x="50%" y="75%" textAnchor="middle" dominantBaseline="middle" fontSize="12" fontFamily="monospace" fill="#fcd9cc">2.0</text>
    </svg>
  ),
  /* ── Database ── */
  MongoDB: (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <path d="M97.2 26.8C88.7 15.4 76 8 64 8c0 0-4.5 47.3-4.5 56s4.5 12 4.5 12c-.3 9.7-.6 16.4-.8 24.7 0 .4.3.7.7.8C79 104 97 95.2 106 80c9.5-16 4.9-38.2-8.8-53.2z" fill="#599636"/>
      <path d="M64 8c-12 0-24.7 7.4-33.2 18.8C17.1 41.8 12.5 64 22 80c9 15.2 27 24 42.3 21.5.2-.1.4-.4.4-.7C64.5 92.5 64 80 64 80s4.5-4.2 4.5-12S64 8 64 8z" fill="#6cac48"/>
      <path d="M64.5 20.5c0 .7-.6 1.3-1.3 1.5l-1.5.4c-.7.2-1.1.8-1 1.5l.4 3.6c.1.6.7 1.1 1.3 1l1.5-.2c.7-.1 1.3.4 1.4 1.1l.5 4.5c.1.7-.5 1.4-1.2 1.4h-.3c-.7 0-1.3.6-1.3 1.3v13c0 .7.6 1.3 1.3 1.3.7 0 1.3-.6 1.3-1.3v-13c0-.7-.6-1.3-1.3-1.3h-.3c-.7 0-1.3-.7-1.2-1.4l.5-4.5c.1-.7.7-1.2 1.4-1.1l1.5.2c.7.1 1.2-.4 1.3-1l.4-3.6c.1-.7-.3-1.3-1-1.5l-1.5-.4c-.7-.2-1.3-.8-1.3-1.5V8.3c0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3v12.2h-.3z" fill="#c2bfbf"/>
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <path d="M93.8 24.6c-5.7-4.7-13.2-7-21-7H64c-7.8 0-15.3 2.3-21 7C35.7 31.8 32 42 32 53s3.7 21.2 11 28.4c5.7 4.7 13.2 7 21 7h8.8c7.8 0 15.3-2.3 21-7C101.1 74.2 105 64 105 53S101.1 31.8 93.8 24.6z" fill="#336791"/>
      <path d="M80.5 73.5c-1 2.8-3 5-5.5 6.4-1.5.8-3.2 1.2-4.9 1.2h-12c-1.7 0-3.4-.4-4.9-1.2-2.5-1.4-4.5-3.6-5.5-6.4-1-2.8-1.1-5.8-.3-8.6l6-21h21.4l6 21c.8 2.8.7 5.8-.3 8.6z" fill="#fff"/>
      <path d="M73.5 41H54.5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h19c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2z" fill="#336791"/>
    </svg>
  ),
  Mongoose: (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="12" fill="#880000"/>
      <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fontSize="13" fontFamily="monospace" fontWeight="bold" fill="white">Mongoose</text>
      <path d="M32 80h64" stroke="#f87171" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  ),
  Vercel: (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="12" fill="#000"/>
      <path d="M64 28L100 96H28L64 28z" fill="#fff"/>
    </svg>
  ),
  Render: (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="12" fill="#46E3B7"/>
      <text x="50%" y="58%" textAnchor="middle" dominantBaseline="middle" fontSize="18" fontFamily="sans-serif" fontWeight="bold" fill="#000">Render</text>
    </svg>
  ),
  /* ── Tools ── */
  Git: (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <path d="M124.7 57.6L70.4 3.3a11 11 0 00-15.6 0L42.3 15.9 58.8 32.4c3.6-1.3 7.8-.5 10.7 2.4 3 3 3.8 7.2 2.4 10.8l15.9 15.9c3.6-1.4 7.8-.6 10.8 2.4a11 11 0 010 15.6 11 11 0 01-15.6 0c-3.1-3.1-3.9-7.6-2.2-11.4L65.6 53.6v33a11 11 0 014.5 17.8 11 11 0 01-15.6 0 11 11 0 010-15.6 11 11 0 013.8-2.5V52.9a11 11 0 01-5.9-14.4L35.9 21.9 3.3 54.5a11 11 0 000 15.6l54.3 54.3a11 11 0 0015.6 0L124.7 73a11 11 0 000-15.4z" fill="#F34F29"/>
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <path d="M64 5.3C31.6 5.3 5.3 31.6 5.3 64c0 25.9 16.8 47.9 40.1 55.7 2.9.5 4-1.3 4-2.8v-9.8c-16.3 3.5-19.7-7.9-19.7-7.9-2.7-6.8-6.5-8.6-6.5-8.6-5.3-3.6.4-3.5.4-3.5 5.9.4 9 6 9 6 5.2 8.9 13.7 6.4 17 4.8.5-3.7 2-6.2 3.7-7.6-13-1.5-26.6-6.5-26.6-28.9 0-6.4 2.3-11.6 6-15.7-.6-1.5-2.6-7.4.6-15.5 0 0 4.9-1.6 16 6a55.8 55.8 0 0129.2 0c11.1-7.6 16-6 16-6 3.2 8.1 1.2 14 .6 15.5 3.7 4.1 6 9.3 6 15.7 0 22.5-13.7 27.4-26.7 28.8 2.1 1.8 4 5.4 4 10.9v16.2c0 1.6 1.1 3.4 4 2.8C106 111.9 122.7 89.9 122.7 64 122.7 31.6 96.4 5.3 64 5.3z" fill="currentColor"/>
    </svg>
  ),
  Postman: (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <circle cx="64" cy="64" r="56" fill="#FF6C37"/>
      <path d="M77 52l-8 8 5 5-8 8-5-5-8 8-5-5 21-21 8 8z" fill="#fff" opacity="0.9"/>
      <circle cx="52" cy="76" r="6" fill="#fff" opacity="0.8"/>
    </svg>
  ),
  Firebase: (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 88L44 28l22 22-38 38z" fill="#FFA000"/>
      <path d="M67.6 60.7L44 28 28 88l39.6-27.3z" fill="#F57F17"/>
      <path d="M100 88L79.4 18.6 67.6 60.7 100 88z" fill="#FFCA28"/>
      <path d="M28 88h72L67.6 60.7 28 88z" fill="#FFA000"/>
      <path d="M100 88L67.6 60.7 79.4 18.6l20.6 69.4z" fill="#F57F17"/>
    </svg>
  ),
  Cloudinary: (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="12" fill="#3448C5"/>
      <path d="M38 75a18 18 0 010-36c2 0 3.8.3 5.6.9A24 24 0 0188 59a14 14 0 01-2 27H38z" fill="#fff" opacity="0.95"/>
    </svg>
  ),
};

/* ── Skill Categories ─────────────────────────────────────── */
const categories = [
  {
    id: "frontend",
    label: "Frontend",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    id: "backend",
    label: "Backend",
    skills: ["TypeScript", "Node.js", "Express.js", "REST APIs", "JWT", "OAuth"],
  },
  {
    id: "database",
    label: "Database & Deploy",
    skills: ["MongoDB", "PostgreSQL", "Mongoose", "Vercel", "Render"],
  },
  {
    id: "tools",
    label: "Tools",
    skills: ["Git", "GitHub", "Postman", "Firebase", "Cloudinary"],
  },
];

/* ── Skill Logo Card ─────────────────────────────────────── */
function SkillLogo({ name }) {
  const logo = logos[name];
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 350, damping: 20 }}
      className="flex flex-col items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-2xl
                 bg-white dark:bg-zinc-900
                 border border-gray-200/80 dark:border-zinc-800
                 hover:border-blue-400 dark:hover:border-blue-500
                 shadow-sm hover:shadow-lg hover:shadow-blue-500/10
                 transition-shadow duration-300 cursor-default group h-full"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center
                      rounded-xl bg-gray-50 dark:bg-zinc-800
                      group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10
                      transition-colors duration-200">
        {logo ? (
          <div className="w-6 h-6 sm:w-8 sm:h-8">{logo}</div>
        ) : (
          <span className="text-xl sm:text-2xl font-bold text-blue-500">{name[0]}</span>
        )}
      </div>
      <span className="text-xs font-medium text-gray-700 dark:text-zinc-400 text-center leading-tight">
        {name}
      </span>
    </motion.div>
  );
}

/* ── Skills Section ──────────────────────────────────────── */
function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  const activeCategory = categories.find((c) => c.id === activeTab);

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-24"
    >
      <p className="text-blue-500 mb-3 tracking-widest uppercase text-sm">Skills</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-gray-900 dark:text-white">
        Technologies I Work With
      </h2>

      {/* ── Tab Bar ── */}
      <div className="relative flex flex-wrap gap-1 p-1 rounded-xl bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 mb-8 sm:mb-10 w-full sm:w-fit">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`relative z-10 px-3 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap flex-1 sm:flex-none text-center
              ${activeTab === cat.id
                ? "text-white"
                : "text-gray-700 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white"
              }`}
          >
            {/* Sliding active pill */}
            {activeTab === cat.id && (
              <motion.div
                layoutId="active-tab-pill"
                className="absolute inset-0 rounded-lg bg-blue-600 shadow-md shadow-blue-500/30"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* ── Skill Logos Grid ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4"
        >
          {activeCategory.skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05, duration: 0.25 }}
              className="h-full"
            >
              <SkillLogo name={skill} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}

export default Skills;