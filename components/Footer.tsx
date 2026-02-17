"use client";

const Footer = () => {
    return (
        <footer className="bg-zinc-50/70 dark:bg-zinc-950/70 backdrop-blur-lg border-t border-zinc-200/50 dark:border-zinc-800/50 transition-colors duration-300">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-indigo-600 dark:text-indigo-400">Anurag Kumar</span>
                        </a>
                        <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-xs leading-relaxed">
                            Building digital experiences with code and creativity. Let's create something amazing together.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-zinc-900 uppercase dark:text-white">Quick Links</h2>
                            <ul className="text-zinc-500 dark:text-zinc-400 font-medium space-y-3">
                                <li>
                                    <a href="#about" className="hover:text-indigo-600 transition-colors">About Me</a>
                                </li>
                                <li>
                                    <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
                                </li>
                                <li>
                                    <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
                                </li>
                                <li>
                                    <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-zinc-900 uppercase dark:text-white">Connect</h2>
                            <ul className="text-zinc-500 dark:text-zinc-400 font-medium space-y-3">
                                <li>
                                    <a href="https://github.com/anuragkrs2195" target="_blank" className="hover:text-indigo-600 transition-colors">GitHub</a>
                                </li>
                                <li>
                                    <a href="https://linkedin.com/in/anurag-kumar-0676a3233" target="_blank" className="hover:text-indigo-600 transition-colors">LinkedIn</a>
                                </li>
                                <li>
                                    <a href="mailto:anuragkrs2195@gmail.com" className="hover:text-indigo-600 transition-colors">Email</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-zinc-200 sm:mx-auto dark:border-zinc-800 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-zinc-500 sm:text-center dark:text-zinc-400">
                        © 2026 <a href="/" className="hover:underline text-indigo-600 dark:text-indigo-400">Anurag Kumar™</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-2 text-sm text-zinc-400">
                        <span>Built with Next.js & Tailwind</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
