import type { Metadata } from "next";
import { Navbar } from "@/components";
import "./globals.css";
import "./page.scss";

export const metadata: Metadata = {
  title: "Welcome to ADM Drones",
  description: "Frame of Aircraft that has Aerodynamics and Drone Properties",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="app">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
