

import localFont from "next/font/local";
import React from "react";
import "./globals.css";
import Sidebar from './Sidebar';
import { Analytics } from "@vercel/analytics/react"


export const metadata = {
  title: "Zephyros",
  description: "Impulsione suas vendas com o Zephyros, um bot de vendas completo.",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="pt-br">
      <body className="bg-blue-950 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-[auto,1fr] lg:h-screen p-4 font-whitney font-semibold">
          <Sidebar/>
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
