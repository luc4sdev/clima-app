"use client";
import { useState } from 'react'
import { Poppins } from 'next/font/google'
import { ThemeContext } from '@/contexts/theme-context'

import './globals.css'


const poppins = Poppins({ subsets: ['latin'], weight: '500' })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [newTheme, setNewTheme] = useState('light');


  return (
    <html lang="en">
       <ThemeContext.Provider value={{ newTheme, setNewTheme }}>
      <body className={poppins.className}>{children}</body>
      </ThemeContext.Provider>
    </html>
  )
}
