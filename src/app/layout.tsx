import React, { ReactNode, useState } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { project } from "./constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: project.name,
  description: project.desc,
};

function RootLayout({ children }: Readonly<{children: ReactNode}>) {

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;