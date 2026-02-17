"use client";
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { name: "Python", level: 90 },
        { name: "C++", level: 80 },
        { name: "HTML/CSS", level: 95 },
        { name: "FastAPI", level: 85 },
        { name: "SQL", level: 75 },
        { name: "Git & GitHub", level: 90 },
        { name: "Postman", level: 85 },
        { name: "Design Tools (Figma/Canva)", level: 80 },
        { name: "Problem Solving", level: 90 },
    ];

    return (
        <section id="skills" className="bg-transparent py-16 transition-colors duration-300">
            <div className="max-w-screen-xl px-4 mx-auto">
                <div className="text-center mb-12">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900/30 dark:text-indigo-300 mb-2 inline-block tracking-wide">Expertise</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                        className="text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-white"
                    >
                        Technical Skills
                    </motion.h2>
                    <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: false }}
                            className="w-full p-6 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm hover:shadow-lg transition-all"
                        >
                            <div className="flex justify-between mb-1">
                                <span className="text-base font-medium text-zinc-900 dark:text-white">{skill.name}</span>
                                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-zinc-200 rounded-full h-2.5 dark:bg-zinc-800 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    viewport={{ once: false }}
                                    className="bg-indigo-600 h-2.5 rounded-full"
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
