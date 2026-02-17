"use client";
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="bg-transparent py-16 transition-colors duration-300">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <div className="text-center mb-12">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900/30 dark:text-indigo-300 mb-2 inline-block tracking-wide">Get in Touch</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                        className="text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-white"
                    >
                        Contact Us
                    </motion.h2>
                    <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
                </div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: false }}
                    className="mb-8 lg:mb-16 font-light text-center text-zinc-500 dark:text-zinc-400 sm:text-xl"
                >
                    Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
                </motion.p>
                <motion.form
                    action="#"
                    className="space-y-8 p-8 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: false }}
                >
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-300">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-xl focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3 dark:bg-zinc-800 dark:border-zinc-700 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 dark:shadow-sm-light transition-colors" placeholder="name@flowbite.com" required />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-300">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-zinc-900 bg-zinc-50 rounded-xl border border-zinc-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-800 dark:border-zinc-700 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 dark:shadow-sm-light transition-colors" placeholder="Let us know how we can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-400">Your message</label>
                        <textarea id="message" rows={6} className="block p-3 w-full text-sm text-zinc-900 bg-zinc-50 rounded-xl shadow-sm border border-zinc-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-800 dark:border-zinc-700 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 transition-colors" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-6 text-sm font-medium text-center text-white rounded-xl bg-indigo-600 sm:w-fit hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 transition-all hover:scale-105 active:scale-95 duration-200">Send message</button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
