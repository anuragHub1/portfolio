"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorFollower() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        },
        text: {
            height: 150,
            width: 150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            backgroundColor: "rgba(79, 70, 229, 0.3)", // Indigo mix
            mixBlendMode: "difference" as any,
        },
    };

    return (
        <>
            {/* Main cursor (dot) */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-indigo-500 rounded-full pointer-events-none z-[9999] hidden md:block" // Hidden on mobile
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                }}
            />

            {/* Trailing ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-indigo-400 rounded-full pointer-events-none z-[9998] hidden md:block" // Hidden on mobile
                variants={variants}
                animate={cursorVariant}
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 20,
                }}
            />
        </>
    );
}
