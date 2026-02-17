"use client";
import { motion } from 'framer-motion';

const Education = () => {
    const educationData = [
        {
            institution: "Shivaji College, University of Delhi",
            degree: "Bachelor of Science (Physical Science)",
            year: "Nov 2021 - Jul 2024",
            description: "Major: Computer Science | Minor: Mathematics, Physics. Relevant Coursework: Web Technologies (Python, HTML, CSS), Object-Oriented Programming, (SQL, DBMS)"
        },
        {
            institution: "Central Board of Secondary Education",
            degree: "Higher Secondary Certificate (12th Grade)",
            year: "April 2020 - April 2021",
            description: "Major: Physics, Chemistry, Mathematics, Computer Science"
        },
        {
            institution: "Central Board of Secondary Education",
            degree: "High School Certificate (10th Grade)",
            year: "April 2018 - April 2019",
            description: "Subjects: Science, Mathematics, English, Hindi, Social Science"
        }
    ];

    return (
        <section id="education" className="bg-transparent py-16 transition-colors duration-300">
            <div className="max-w-screen-xl px-4 mx-auto">
                <div className="text-center mb-12">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900/30 dark:text-indigo-300 mb-2 inline-block tracking-wide">My Journey</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                        className="text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-white"
                    >
                        Education
                    </motion.h2>
                    <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
                </div>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-zinc-200 dark:before:bg-zinc-800">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: false }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-zinc-950 bg-indigo-100 group-[.is-active]:bg-indigo-600 text-indigo-600 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.84c-.896.248-1.79.507-2.668.757m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                </svg>
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/50 shadow-sm bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm hover:border-indigo-500/40 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <div className="font-bold text-zinc-900 dark:text-white text-lg">{item.degree}</div>
                                    <time className="font-medium text-indigo-600 dark:text-indigo-400 text-sm">{item.year}</time>
                                </div>
                                <div className="text-zinc-500 dark:text-zinc-400 font-medium">{item.institution}</div>
                                <div className="text-zinc-500 dark:text-zinc-400 text-sm mt-3 leading-relaxed">{item.description}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
