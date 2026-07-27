import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Smartphone } from "lucide-react";

function Contact() {
    const [copied, setCopied] = useState(false);

    const handleCopyPhone = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText("+923066537148");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.section
            id="contact"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-24"
        >
            <div className="mb-10">
                <span className="text-sm text-blue-500 dark:text-blue-400 border border-blue-500 dark:border-blue-400 px-4 py-2 rounded-full">
                    Available for Work
                </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
                Let's Build Something Great
            </h2>

            <p className="text-gray-700 dark:text-zinc-400 max-w-2xl mb-8 sm:mb-10 text-sm sm:text-base">
                I'm currently open to junior
                developer opportunities. Feel free to reach out.
            </p>

            <div className="flex flex-col gap-4">
                <a
                    href="mailto:iamehtisham10@gmail.com"
                    className="flex items-center gap-2 text-base sm:text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors break-all"
                >
                    <Mail className="w-5 h-5 text-blue-500" />
                    <span>iamehtisham10@gmail.com</span>
                </a>

                <button
                    onClick={handleCopyPhone}
                    className="text-lg text-left text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                    <Smartphone className="w-5 h-5 text-blue-500" />
                    <span>+92 306 6537148</span>
                    {copied && <span className="text-sm text-green-500 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-md">Copied!</span>}
                </button>

                <a
                    href="https://github.com/ehteysham10"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                    <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span>GitHub</span>
                </a>

                <a
                    href="https://linkedin.com/in/ehteysham"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                    <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span>LinkedIn</span>
                </a>


            </div>
        </motion.section>
    );
}

export default Contact;