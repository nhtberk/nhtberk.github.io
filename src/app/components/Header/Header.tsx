'use client'

import Link from 'next/link'
import { useTheme } from '../ThemeProvider'
import { FiSun, FiMoon, FiX, FiMenu } from 'react-icons/fi'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const navItems = [
    { href: '/about', label: 'Hakkımda' },
    { href: '/projects', label: 'Projeler' },
    { href: '/cv', label: 'CV' },
    { href: '/contact', label: 'İletişim' }
  ]

  const isActive = (path: string) => {
    return pathname === path
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
      <nav className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className={`text-xl font-bold transition-colors ${isActive('/') ? 'text-primary' : 'hover:text-primary'}`}
        >
          Nihat Berk ÖZ
        </Link>
        
        <div className="flex items-center gap-6">
          {/* Masaüstü Menü */}
          <ul className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className={`transition-colors relative ${
                    isActive(item.href) 
                      ? 'text-primary font-medium after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-primary' 
                      : 'hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobil Menü Butonu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-primary/10 transition-colors"
          >
            {isMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-primary/10 transition-colors"
          >
            {theme === 'light' ? <FiMoon className="w-5 h-5" /> : <FiSun className="w-5 h-5" />}
          </button>

          {/* Mobil Menü */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-background border-b md:hidden">
              <ul className="flex flex-col p-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={`block py-2 transition-colors ${
                        isActive(item.href)
                          ? 'text-primary font-medium'
                          : 'hover:text-primary'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header 