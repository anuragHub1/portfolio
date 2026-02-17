"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: "Blogging Platform API",
            description: "Developed a Blogging Platform API using Python (FastAPI) to perform CRUD operations. Implemented endpoints for managing blog posts, ensuring clean data flow and basic error handling.",
            image: "/path/to/blog-api.jpg", // Placeholder
            link: "#",
            github: "https://github.com/anuragHub1/blogging-platform-API"
        },
        {
            title: "Expense Tracker API",
            description: "Developed an Expense Tracker API using Python with full CRUD operations. Implemented ORM for efficient database interaction and integrated JWT-based authentication.",
            image: "/path/to/expense-tracker.jpg", // Placeholder
            link: "#",
            github: "https://github.com/anuragHub1/expense-tracker-API"
        },
        {
            title: "Restaurant Website",
            description: "Designed and developed a restaurant website for 'The Tadka Flavour' using HTML and CSS. Created structured layouts for home, menu, and contact sections.",
            image: "/path/to/restaurant.jpg", // Placeholder
            link: "https://frontend-restaurant-website.netlify.app/",
            github: "#"
        }
    ];

    return (
        <section id="projects" className="bg-transparent py-16 transition-colors duration-300">
            <div className="max-w-screen-xl px-4 mx-auto">
                <div className="text-center mb-12">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900/30 dark:text-indigo-300 mb-2 inline-block tracking-wide">Portfolio</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                        className="text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-white"
                    >
                        Featured Projects
                    </motion.h2>
                    <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
                </div>
                <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            viewport={{ once: false }}
                            className="max-w-sm bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800/50 rounded-2xl shadow-sm hover:shadow-xl hover:border-indigo-500/40 transition-all duration-300 flex flex-col h-full group"
                        >
                            <div className="h-48 bg-zinc-100 dark:bg-zinc-800 w-full rounded-t-2xl flex items-center justify-center">
                                <span className="text-zinc-500 dark:text-zinc-400">Project Image</span>
                            </div>
                            <div className="p-5 flex flex-col flex-grow">
                                <a href={project.link !== "#" ? project.link : project.github} target="_blank" rel="noopener noreferrer">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white hover:text-indigo-600 transition-colors">{project.title}</h5>
                                </a>
                                <p className="mb-3 font-normal text-zinc-600 dark:text-zinc-400 flex-grow">{project.description}</p>
                                <div className="flex space-x-4 mt-auto">
                                    {project.link !== "#" && (
                                        <Link href={project.link} target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 transition-colors">
                                            Live Demo
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </Link>
                                    )}
                                    <Link href={project.github} target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-zinc-900 bg-white border border-zinc-300 rounded-xl hover:bg-zinc-100 focus:ring-4 focus:outline-none focus:ring-zinc-200 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 dark:hover:bg-zinc-700 dark:hover:border-zinc-700 dark:focus:ring-zinc-700 transition-colors">
                                        GitHub
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
