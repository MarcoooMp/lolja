import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LoLja - Artists",
  description: "Um espaço reservado para pequenos produtores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
       
        <Navbar/>
        <main className='bg-slate-700 h-screen p-16 text-white'>
          {children}
        </main>
      </body>
    </html>
  );
}


