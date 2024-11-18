'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Header from './components/Header/Header'
import { ThemeProvider } from './components/ThemeProvider'
import LoadingSpinner from './components/LoadingSpinner'
import "/globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleStart = () => setIsLoading(true)
    const handleComplete = () => setIsLoading(false)

    window.addEventListener('beforeunload', handleStart)
    window.addEventListener('load', handleComplete)

    return () => {
      window.removeEventListener('beforeunload', handleStart)
      window.removeEventListener('load', handleComplete)
    }
  }, [])

  useEffect(() => {
    setIsLoading(true)
    const timeout = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timeout)
  }, [pathname])

  return (
    <html lang="tr">
      <body className="antialiased">
        <ThemeProvider>
          {isLoading && <LoadingSpinner />}
          <Header />
          <main className="pt-16">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
