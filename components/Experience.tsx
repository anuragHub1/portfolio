"use client";
import { motion } from 'framer-motion';

const Experience = () => {
    const experienceData = [
        {
            company: "Oges (P) Ltd",
            role: "Backend developer trainee associate",
            period: "Jan 2026 - Present",
            description: "Full-time · Gurugram, Haryana, India · On-site. Working as a backend developer on FastAPI.",
            skills: ["Software Development"]
        },
        {
            company: "DTS Tech India",
            role: "Graphic Designer",
            period: "Nov 2023 - May 2024",
            description: "Internship · New Delhi · Hybrid. Work as Graphic Designer."
        }
    ];

    return (
        <section id="experience" className="bg-transparent py-16 transition-colors duration-300">
            <div className="max-w-screen-xl px-4 mx-auto">
                <div className="text-center mb-12">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900/30 dark:text-indigo-300 mb-2 inline-block tracking-wide">Career Path</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                        className="text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-white"
                    >
                        Experience
                    </motion.h2>
                    <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
                </div>
                <ol className="relative border-s border-zinc-200 dark:border-zinc-800 ml-4">
                    {experienceData.map((item, index) => (
                        <motion.li
                            key={index}
                            className="mb-10 ms-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: false }}
                        >
                            <div className="absolute w-4 h-4 bg-indigo-600 rounded-full mt-1.5 -start-2 border-4 border-white dark:border-zinc-900 shadow-lg shadow-indigo-500/50"></div>

                            <div className="p-6 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800/50 rounded-2xl shadow-sm hover:shadow-xl hover:border-indigo-500/40 transition-all duration-300 group">
                                <time className="mb-1 text-sm font-normal leading-none text-indigo-600 dark:text-indigo-400 font-mono">{item.period}</time>
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {item.role} <span className="text-zinc-500 dark:text-zinc-500 font-normal">at {item.company}</span>
                                </h3>
                                <p className="mb-4 text-base font-normal text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                                    {item.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {item.skills && item.skills.map((skill, i) => (
                                        <span key={i} className="bg-indigo-50 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-indigo-900/30 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800/50">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Experience;
