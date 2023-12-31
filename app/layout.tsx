import Link from "next/link";
import type { ReactNode } from "react";
import './globals.css'
import NavBar from "./components/NavBar";
interface LayoutProps {
    children: ReactNode;
}
export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en">

            <body className=" bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
                <header >
                <NavBar/>
                </header>
                <main className="grow py-3">
                    {children}
                </main>
                <footer className="border-t py-3 text-center text-xs">
                Ganme data and images courtesy of {' '}
                    <a href="https://rawg.io/" className="text-orange-800 hover:underline" 
                    target="_blank">RAWG</a>
                </footer>
            </body>
        </html>
    )
}