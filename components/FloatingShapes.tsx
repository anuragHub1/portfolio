"use client";

import { motion } from "framer-motion";

export default function FloatingShapes() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Shape 1: Top Left - Indigo/Purple */}
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-500/20 dark:bg-indigo-500/15 blur-[120px]"
                animate={{
                    y: [0, 50, 0],
                    x: [0, 20, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Shape 2: Bottom Right - Violet/Fuchsia */}
            <motion.div
                className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-violet-500/20 dark:bg-fuchsia-600/15 blur-[120px]"
                animate={{
                    y: [0, -50, 0],
                    x: [0, -20, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Shape 3: Center Left - Cyan/Blue Mix */}
            <motion.div
                className="absolute top-[40%] left-[-20%] w-[40vw] h-[40vw] rounded-full bg-cyan-500/20 dark:bg-blue-600/15 blur-[100px]"
                animate={{
                    x: [0, 50, 0],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}
