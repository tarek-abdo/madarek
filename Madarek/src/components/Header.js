'use client'

import { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from './ThemeProvider'
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react'

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
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const navigation = language === 'ar' ? navigationAr : navigationEn;
  const siteTitle = language === 'ar' ? ' مدارك' : 'Madarak Center';
  const siteSubtitle = language === 'ar' ? 'دراسات الإسلام الحضاري' : 'Civilizational Islam Studies';

  return (
    <header className="bg-white dark:bg-dark-surface shadow-sm sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-1 lg:px-1" aria-label="Global">
       
        <div className="flex lg:flex-4 mx-6">
          <Link href="/" className="-m-1.5 p-1.5">
            {/* <span className="sr-only">{siteTitle}</span> */}
            <div className="flex items-center space-x-2 flex-row">
              {/* <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">م</span>
              </div> */}
              <div>
                <h4 className="text-2xl font-bold text-gradient">{siteTitle}</h4>
                {/* <p className="text-xs text-gray-600 dark:text-gray-400">{siteSubtitle}</p> */}
              </div>
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.submenu && item.submenu.length > 0 ? (
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-x-1 text-base font-semibold leading-6 text-orange-600 dark:text-gray-100 hover:text-primary transition-colors">
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {activeDropdown === item.name && (
                    <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                      <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white dark:bg-dark-surface text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                          {item.submenu.map((subItem) => (
                            <div key={subItem.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                              <div>
                                <Link href={subItem.href} className="font-semibold text-gray-900 dark:text-gray-100">
                                  {subItem.name}
                                  <span className="absolute inset-0" />
                                </Link>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="text-base font-semibold leading-6 text-orange-600  dark:text-gray-100 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 mx-4">
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
         <div className="flex items-center gap-4 m-4 ">
          <select
            value={language}
            onChange={e => setLanguage(e.target.value)}
            className="border rounded border-orange-500 py-1 text-sm focus:outline-green bg-white  text-green-900 dark:bg-gray-800 dark:text-white"
            aria-label={language === 'ar' ? 'اختر اللغة' : 'Select language'}
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-dark-surface px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Madarak Center</span>
                <div className="flex items-center space-x-2">
                  {/* <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">م</span>
                  </div> */}
                  <span className="text-base font-bold text-gradient">Madarak</span>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 