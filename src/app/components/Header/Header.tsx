'use client'

import Link from 'next/link'
import { useTheme } from '../ThemeProvider'
import { FiSun, FiMoon } from 'react-icons/fi'
import { usePathname } from 'next/navigation'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const pathname = usePathname()

  const navItems = [
    { href: '/about', label: 'Hakkımda' },
    { href: '/projects', label: 'Projeler' },
    { href: '/cv', label: 'CV' },
    { href: '/contact', label: 'İletişim' }
  ]

  const isActive = (path: string) => {
    return pathname === path
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
          <ul className="flex gap-6">
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
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-primary/10 transition-colors"
          >
            {theme === 'light' ? <FiMoon className="w-5 h-5" /> : <FiSun className="w-5 h-5" />}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header 