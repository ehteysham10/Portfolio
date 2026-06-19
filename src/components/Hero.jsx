import { useRef } from "react";
import { motion, useSpring } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

/* ── Animated code lines ─────────────────────────────────── */
const codeLines = [
  { text: 'const developer = {',         color: 'text-blue-600 dark:text-blue-300' },
  { text: '  name: "Ehtasham Ul Haq",',  color: 'text-green-700 dark:text-green-400' },
  { text: '  role: "Full Stack Dev",',   color: 'text-green-700 dark:text-green-400' },
  { text: '  focus: "Backend Systems",', color: 'text-green-700 dark:text-green-400' },
  { text: '  stack: [',                  color: 'text-blue-600 dark:text-blue-300' },
  { text: '    "React", "Node.js",',     color: 'text-amber-600 dark:text-yellow-400' },
  { text: '    "Express", "MongoDB",',   color: 'text-amber-600 dark:text-yellow-400' },
  { text: '    "PostgreSQL"',            color: 'text-amber-600 dark:text-yellow-400' },
  { text: '  ],',                        color: 'text-blue-600 dark:text-blue-300' },
  { text: '  openToWork: true 🟢',       color: 'text-emerald-600 dark:text-emerald-400' },
  { text: '};',                          color: 'text-blue-600 dark:text-blue-300' },
];

const codeContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.5 },
  },
};

const codeLineVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

/* ── Magnetic Button ──────────────────────────────────────── */
function MagneticButton({ children, className, href, download, onClick }) {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 350, damping: 20 });
  const y = useSpring(0, { stiffness: 350, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Tag = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Tag
        href={href}
        download={download}
        onClick={onClick}
        className={className}
      >
        {children}
      </Tag>
    </motion.div>
  );
}

/* ── Hero ─────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Dot-grid animated background */}
      <div className="dot-grid absolute inset-0 opacity-60 dark:opacity-40 pointer-events-none" />

      {/* Subtle radial fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50 dark:to-black pointer-events-none" />

      {/* ── ZONE 1: Full-viewport above-fold content ── */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative min-h-screen max-w-7xl mx-auto px-4 sm:px-6
                   flex flex-col md:flex-row items-center justify-center
                   gap-8 md:gap-12
                   pt-24 pb-10 md:pt-0 md:pb-0"
      >
        {/* ── Left column ── */}
        <div className="flex-1 w-full text-center md:text-left order-2 md:order-1">

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-1.5 rounded-full
                       bg-emerald-50 dark:bg-emerald-950/50
                       border border-emerald-300 dark:border-emerald-700
                       text-emerald-700 dark:text-emerald-400
                       text-sm font-medium badge-pulse"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            Available for Work
          </motion.div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight
                         bg-gradient-to-r from-gray-900 to-blue-500
                         dark:from-white dark:via-white dark:to-blue-500
                         bg-clip-text text-transparent">
            Ehtasham Ul Haq
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl
                         text-gray-800 dark:text-zinc-400 mt-3 sm:mt-4
                         min-h-[2rem] sm:min-h-[2.5rem]">
            <Typewriter
              words={["Full Stack Developer", "Backend Engineer", "MERN Stack Developer"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </h2>

          <p className="max-w-xl mx-auto md:mx-0 mt-4 sm:mt-6
                        text-gray-700 dark:text-zinc-400
                        text-sm sm:text-base leading-7">
            Full Stack Developer specializing in backend systems using Node.js, Express.js,
            MongoDB, and PostgreSQL. I build secure APIs, authentication systems,
            real-time applications, and modern React frontends.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6 sm:mt-8 md:mt-10">
            <MagneticButton
              href="#projects"
              className="bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-1
                         transition-all duration-300 px-5 sm:px-6 py-2.5 sm:py-3
                         rounded-xl font-medium inline-block shadow-lg shadow-blue-500/25
                         text-sm sm:text-base"
            >
              View Projects
            </MagneticButton>

            <MagneticButton
              href="#contact"
              className="flex items-center gap-2
                         border border-gray-300 dark:border-zinc-700
                         text-gray-900 dark:text-white
                         hover:border-blue-500 dark:hover:border-blue-500
                         hover:bg-blue-50 dark:hover:bg-blue-500/10
                         px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl
                         transition duration-300 font-medium
                         text-sm sm:text-base"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              Contact Me
            </MagneticButton>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-700 animate-pulse" />
              <MagneticButton
                href="/resume.pdf"
                download="Ehtisham_Ul_Haq_Resume.pdf"
                className="relative flex items-center gap-2
                           bg-white dark:bg-zinc-950
                           border border-blue-500/50 text-blue-600 dark:text-blue-400
                           px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl
                           transition duration-300 font-medium
                           hover:bg-blue-50 dark:hover:bg-blue-500/10
                           text-sm sm:text-base"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download Resume
              </MagneticButton>
            </div>
          </div>

        </div>

        {/* ── Right column — Profile image + orbit rings ── */}
        <motion.div
          className="flex-shrink-0 flex justify-center order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Responsive image container: smaller on mobile, larger on md+ */}
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96
                          flex items-center justify-center">

            {/* Outer slow-orbit ring */}
            <div
              className="orbit-ring-1 absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 70%, rgba(59,130,246,0.7) 85%, rgba(168,85,247,0.6) 95%, transparent 100%)",
                padding: "2px",
              }}
            >
              <div className="w-full h-full rounded-full bg-gray-50 dark:bg-black" />
            </div>

            {/* Inner reverse-orbit ring */}
            <div
              className="orbit-ring-2 absolute rounded-full"
              style={{
                inset: "10px",
                background:
                  "conic-gradient(from 180deg, transparent 75%, rgba(59,130,246,0.5) 90%, transparent 100%)",
                padding: "1.5px",
              }}
            >
              <div className="w-full h-full rounded-full bg-gray-50 dark:bg-black" />
            </div>

            {/* Glow behind image */}
            <div className="orbit-glow absolute rounded-full bg-blue-500/20 dark:bg-blue-500/15"
                 style={{ inset: "20px" }} />

            {/* Profile photo */}
            <div className="absolute rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl group"
                 style={{ inset: "20px" }}>
              <img
                src="/Hero.jpg"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/Hero.jpeg";
                }}
                alt="Ehtasham Ul Haq"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 dark:brightness-90 dark:contrast-[1.15]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent dark:from-black/40 dark:via-transparent pointer-events-none" />
            </div>

          </div>
        </motion.div>
      </motion.div>

      {/* ── ZONE 2: Code card — below the fold, scrolls into view ── */}
      <motion.div
        className="relative max-w-3xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gray-100 dark:bg-zinc-900/80 border border-gray-200 dark:border-zinc-700/60 rounded-2xl p-4 sm:p-6 shadow-xl backdrop-blur-sm overflow-hidden">
          {/* Terminal dots */}
          <div className="flex gap-1.5 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-2 text-xs text-gray-500 dark:text-zinc-500 font-mono self-center">developer.js</span>
          </div>
          <motion.pre
            className="font-mono text-xs sm:text-sm leading-6 overflow-x-auto"
            variants={codeContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {codeLines.map((line, i) => (
              <motion.div key={i} variants={codeLineVariants} className={line.color}>
                {line.text}
              </motion.div>
            ))}
          </motion.pre>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;