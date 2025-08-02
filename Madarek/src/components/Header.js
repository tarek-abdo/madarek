'use client'

import { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from './ThemeProvider'
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react'
import images from 'next/image'

const navigationEn = [
  { name: 'Home', href: '/' },
  { name: 'Islamic Studies', href: '/category/islamic-studies', submenu: [] },
  { name: 'Critical Perspectives', href: '/category/critical-perspectives', submenu: [
    { name: 'Contemporary Thought Maps', href: '/category/contemporary-thought-maps' },
    { name: 'Critical Papers', href: '/category/critical-papers' },
    { name: 'Philosophical Readings', href: '/category/philosophical-readings' }
  ] },
  { name: 'Studies & Analyses', href: '/category/studies-analyses', submenu: [
    { name: 'Post-colonial Studies', href: '/category/post-colonial-studies' },
    { name: 'Geopolitics', href: '/category/geopolitics' },
    { name: 'Future Studies', href: '/category/future-studies' }
  ] },
  { name: 'Articles', href: '/category/articles' },
  { name: 'Publications', href: '/publications' },
  { name: 'Events', href: '/events' },
  { name: 'About', href: '/about' },
];

const navigationAr = [
  { name: 'الرئيسية', href: '/' },
  { name: 'الدراسات الإسلامية', href: '/category/islamic-studies', submenu: [] },
  { name: 'رؤى نقدية', href: '/category/critical-perspectives', submenu: [
    { name: 'خرائط الفكر المعاصر', href: '/category/contemporary-thought-maps' },
    { name: 'أوراق نقدية', href: '/category/critical-papers' },
    { name: 'قراءات فلسفية', href: '/category/philosophical-readings' }
  ] },
  { name: 'دراسات وتحليلات', href: '/category/studies-analyses', submenu: [
    { name: 'دراسات ما بعد الاستعمار', href: '/category/post-colonial-studies' },
    { name: 'الجغرافيا السياسية', href: '/category/geopolitics' },
    { name: 'دراسات المستقبل', href: '/category/future-studies' }
  ] },
  { name: 'مقالات', href: '/category/articles' },
  { name: 'اصدارات', href: '/publications' },
  { name: 'فعاليات', href: '/events' },
  { name: 'حول', href: '/about' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const { theme, toggleTheme } = useTheme()
  const language = 'ar';

  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
  }, []);

  const navigation = navigationAr;
  const siteTitle = ' مدارك';
  const siteSubtitle = 'دراسات الإسلام الحضاري';

  return (
    <header
      className="bg-white dark:bg-dark-surface shadow-lg sticky top-0 z-50"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between min-h-[50px] py-2 lg:px-1" aria-label="Global">
        {/* Right: Toggle Button */}
        <div className="flex">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        {/* Center: Title and Logo */}
        <div className="flex-1 flex justify-center">
          <Link href="/" className="-m-1.5 p-1.5">
            <div className="flex items-center space-x-2 flex-row">
              <div className='flex items-center justify-center'>
                <div style={{maxWidth: 50, height: 50}} className='flex mx-2'>
                  <img src="/image/logo1.jpg" alt="logo" width={40} height={40} />
                </div>
                <h4
                  className={`text-2xl font-bold text-gradient text-center${language === 'ar' ? ' font-noto-kufi-arabic' : ''}`}
                >
                  {siteTitle}
                </h4>
              </div>
            </div>
          </Link>
        </div>
        {/* Left: Theme Toggle */}
        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            ) : (
              <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
        
      </nav>
      
      {/* Mobile/Toggle menu for all screen sizes */}
      {mobileMenuOpen && (
        <div>
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-dark-surface px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-2 p-4">
                <span className="sr-only">Madarak </span>
                <div className="flex items-center space-x-2">
                  <span className="text-base font-bold text-gradient">مدارك</span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && item.submenu.length > 0 && (
                        <div className="ml-4 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block rounded-lg px-3 py-2 text-sm leading-7 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-6">
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-x-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100"
                  >
                    {theme === 'light' ? (
                      <>
                        <Moon className="h-5 w-5" />
                        Dark Mode
                      </>
                    ) : (
                      <>
                        <Sun className="h-5 w-5" />
                        Light Mode
                      </>
                    )}
                  </button>
                  {/* Language select removed, Arabic only */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 