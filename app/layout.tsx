import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import BackgroundEffect from "../components/BackgroundEffect";
import CursorFollower from "../components/CursorFollower";
import FloatingShapes from "../components/FloatingShapes";
import WaterEffect from "../components/WaterEffect";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Anurag Kumar - Personal Portfolio",
  description: "Portfolio of Anurag Kumar, a self-taught developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <ThemeProvider>
          <BackgroundEffect />
          <FloatingShapes />
          <WaterEffect />
          <CursorFollower />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
