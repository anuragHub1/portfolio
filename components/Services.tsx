"use client";

import { motion } from "framer-motion";

const services = [
    {
        title: "Backend Development",
        description: "Building robust, scalable, and high-performance APIs using Python and FastAPI. Database design and optimization included.",
        icon: (
            <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 01-2 2v4a2 2 0 012 2h14a2 2 0 012-2v-4a2 2 0 01-2-2m-2-4h.01M17 16h.01" />
            </svg>
        ),
    },
    {
        title: "Frontend Engineering",
        description: "Crafting responsive, modern, and interactive user interfaces with React, Next.js, and Tailwind CSS. Mobile-first approach.",
        icon: (
            <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: "Automation & Scripting",
        description: "Automating repetitive tasks and workflows using Python scripts. Increasing efficiency and reducing manual error.",
        icon: (
            <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
    },
];

const Services = () => {
    return (
        <section id="services" className="bg-transparent py-16 transition-colors duration-300">
            <div className="max-w-screen-xl px-4 mx-auto">
                <div className="text-center mb-16">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900/30 dark:text-indigo-300 mb-2 inline-block tracking-wide">What I Do</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                        className="text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-white"
                    >
                        My Services
                    </motion.h2>
                    <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: false }}
                            whileHover={{ y: -5 }}
                            className="bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800/50 shadow-sm hover:shadow-xl hover:border-indigo-500/40 transition-all duration-300 group"
                        >
                            <div className="bg-indigo-50 dark:bg-indigo-900/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{service.title}</h3>
                            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
