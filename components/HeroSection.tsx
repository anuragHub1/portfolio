"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="bg-transparent min-h-screen flex items-center justify-center pt-16 transition-colors duration-300 relative overflow-hidden">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mr-auto place-self-center lg:col-span-7"
                >
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900/30 dark:text-indigo-300 mb-4 inline-block tracking-wide">Welcome to my Portfolio</span>
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 inline-block hover:scale-105 transition-transform cursor-default filter drop-shadow-md">Anurag Kumar</span>.
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-zinc-500 lg:mb-8 md:text-lg lg:text-xl dark:text-zinc-400">
                        I am a self-taught developer passionate about building scalable backend systems, automating functional workflows, and crafting intuitive user interfaces.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="#contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white rounded-xl bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900 transition-all hover:scale-105 duration-200 shadow-lg hover:shadow-indigo-500/30">
                            Get started
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Link>
                        <Link href="#projects" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-zinc-900 border border-zinc-300 rounded-xl hover:bg-zinc-100 focus:ring-4 focus:ring-zinc-100 dark:text-white dark:border-zinc-700 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800 transition-all hover:scale-105 duration-200">
                            View Projects
                        </Link>
                    </div>
                </motion.div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center relative">
                    {/* Floating Tech Icons - Background */}
                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 right-10 text-indigo-500/20 dark:text-indigo-400/20 z-0"
                    >
                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" /></svg>
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-10 left-0 text-purple-500/20 dark:text-purple-400/20 z-0"
                    >
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        className="relative w-80 h-80 rounded-full border-4 border-indigo-500/30 dark:border-indigo-400/30 shadow-2xl overflow-hidden group z-10"
                    >
                        {/* Glowing effect behind */}
                        <div className="absolute inset-0 bg-indigo-500/30 blur-[60px] rounded-full group-hover:bg-indigo-500/50 transition-all duration-500"></div>

                        {/* AI Generated Image */}
                        <div className="absolute inset-2 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden">
                            <Image
                                src="/hero_avatar.png"
                                alt="Future Tech Avatar"
                                width={320}
                                height={320}
                                className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
