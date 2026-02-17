"use client";

import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="bg-transparent py-16 transition-colors duration-300">
            <div className="max-w-screen-xl px-4 mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image / Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                        className="relative"
                    >
                        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-zinc-100/50 dark:border-zinc-800/50 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm">
                            {/* Placeholder for a personal image or coding visual */}
                            <div className="bg-indigo-100 dark:bg-zinc-900 aspect-video flex items-center justify-center">
                                <span className="text-indigo-300 dark:text-zinc-700 text-6xl font-bold opacity-20">&lt;/&gt;</span>
                            </div>
                        </div>
                        {/* Decorative blob */}
                        <div className="absolute -z-10 top-[-20%] left-[-20%] w-[120%] h-[120%] bg-indigo-500/10 blur-[80px] rounded-full"></div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-indigo-900/30 dark:text-indigo-300 mb-4 inline-block tracking-wide">About Me</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white mb-6">
                            Self-Taught & <span className="text-indigo-600 dark:text-indigo-400">Passionate</span>
                        </h2>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                            My journey into the world of technology began with curiosity. As a <b>self-taught developer</b>, I've spent countless hours debugging, learning, and building. I truly believe that the best way to learn is by doing.
                        </p>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                            I specialize in <b>Python</b> and <b>FastAPI</b> for backend development, crafting efficient and scalable APIs. On the frontend, I build clean, responsive interfaces using <b>HTML, CSS, and React</b>. I'm constantly exploring new tools to expand my toolkit.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Backend</h4>
                                <p className="text-zinc-500 dark:text-zinc-400">Python, FastAPI, SQL</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Frontend</h4>
                                <p className="text-zinc-500 dark:text-zinc-400">React, Tailwind, HTML/CSS</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
