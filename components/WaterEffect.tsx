"use client";

import { motion } from "framer-motion";

export default function WaterEffect() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
            {/* Wave 1 */}
            <motion.svg
                viewBox="0 0 1440 320"
                className="absolute bottom-0 left-0 w-[200%] h-auto"
                initial={{ x: "-50%" }}
                animate={{
                    x: ["-50%", "0%"],
                    y: [0, 10, 0]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                    y: { duration: 5, ease: "easeInOut" }
                }}
            >
                <path
                    fill="#4f46e5"
                    d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,138.7C960,160,1056,224,1152,240C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </motion.svg>

            {/* Wave 2 */}
            <motion.svg
                viewBox="0 0 1440 320"
                className="absolute bottom-10 left-0 w-[200%] h-auto"
                initial={{ x: "0%" }}
                animate={{
                    x: ["0%", "-50%"],
                    y: [0, -15, 0]
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                    y: { duration: 7, ease: "easeInOut" }
                }}
            >
                <path
                    fill="#6366f1"
                    fillOpacity="0.5"
                    d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,112C672,128,768,160,864,176C960,192,1056,192,1152,197.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </motion.svg>

            {/* Organic Blobs */}
            <motion.div
                className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-400/30 blur-[100px]"
                animate={{
                    borderRadius: [
                        "60% 40% 30% 70% / 60% 30% 70% 40%",
                        "30% 60% 70% 40% / 50% 60% 30% 60%",
                        "60% 40% 30% 70% / 60% 30% 70% 40%"
                    ],
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
}
