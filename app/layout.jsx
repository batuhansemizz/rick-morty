
import "./globals.css";
import Navbar from './components/Navbar'
import {Ubuntu} from 'next/font/google'

const ubuntu = Ubuntu({ 
  subsets: ['latin'],
  weight:['400','700']

 })

export const metadata = {
  title: "Rick And Morty ",
  description: "Next 14 ile app",
  keywords: 'next, html, css, react'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Navbar/>
        <main className="container">
        {children}
        </main>
      </body>
    </html>
  );
}
