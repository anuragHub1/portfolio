"use client";

import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function BackgroundEffect() {
    const { theme } = useTheme();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    // Grid color - slightly more visible
    const gridColor = theme === "dark"
        ? "rgba(255, 255, 255, 0.1)" // Stronger white in dark mode
        : "rgba(0, 0, 0, 0.1)";      // Stronger black in light mode

    // Spotlight - brighter and larger
    const spotlightColor = theme === "dark"
        ? "rgba(255, 255, 255, 0.25)" // Brighter white glow
        : "rgba(79, 70, 229, 0.25)";  // Brighter Indigo glow

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden transition-colors duration-300">
            {/* Grid Pattern */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
            linear-gradient(to right, ${gridColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)
          `,
                    backgroundSize: "40px 40px", // Slightly tighter grid
                    maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)", // Show more of the grid globally
                    WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
                }}
            />

            {/* Mouse Spotlight */}
            <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}, transparent 50%)`,
                }}
            />
        </div>
    );
}
