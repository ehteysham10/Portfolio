function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-zinc-800 py-8 mt-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 dark:text-zinc-500">
                © {new Date().getFullYear()} Ehtisham Ul Haq.
                All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;