import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
   
        <header className="header">
            <div className="container">
              <div className="logo">
                <Link href="/">Rick And Morty</Link>
              </div>
              <div className="links">
                <Link href="/about">Ana Sayfa</Link>
                <Link href="/karakterler">Hakkımızda</Link>
                <Link href="/bolumler">Bölümler</Link>
              </div>
            </div>
        </header>
   
  )
}
