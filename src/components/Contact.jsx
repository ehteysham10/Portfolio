import { motion } from "framer-motion";
import { useState } from "react";

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
            className="max-w-7xl mx-auto px-6 py-24"
        >
            <div className="mb-10">
                <span className="text-sm text-blue-500 dark:text-blue-400 border border-blue-500 dark:border-blue-400 px-4 py-2 rounded-full">
                    Available for Work
                </span>
            </div>

            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Let's Build Something Great
            </h2>

            <p className="text-gray-600 dark:text-zinc-400 max-w-2xl mb-10">
                I'm currently open to junior
                developer opportunities. Feel free to reach out.
            </p>

            <div className="flex flex-col gap-4">
                <a
                    href="mailto:iamehtisham10@gmail.com"
                    className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                    📧 iamehtisham10@gmail.com
                </a>

                <button
                    onClick={handleCopyPhone}
                    className="text-lg text-left text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                    <span>📱 +92 306 6537148</span>
                    {copied && <span className="text-sm text-green-500 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-md">Copied!</span>}
                </button>

                <a
                    href="https://github.com/ehteysham10"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                    💻 GitHub
                </a>

                <a
                    href="https://linkedin.com/in/ehteysham"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                    🔗 LinkedIn
                </a>


            </div>
        </motion.section>
    );
}

export default Contact;