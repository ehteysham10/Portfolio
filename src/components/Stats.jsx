import { motion } from "framer-motion";

const stats = [
    { value: "5+", label: "Projects Built" },
    { value: "2", label: "Internships" },
    { value: "10+", label: "Tech Stack Tools" },
    { value: "100%", label: "Dedication" },
];

function Stats() {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-6 py-20"
        >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                {stats.map((item) => (
                    <div
                        key={item.label}
                        className="bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-6 text-center hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300"
                    >
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                            {item.value}
                        </h3>

                        <p className="text-gray-600 dark:text-zinc-400 mt-2">
                            {item.label}
                        </p>
                    </div>
                ))}

            </div>
        </motion.section>
    );
}

export default Stats;