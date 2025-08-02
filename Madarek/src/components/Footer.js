import Link from 'next/link'
import { Rss, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#ffffff] border-t border-gray-200 pt-2 pb-2" dir="rtl">
      <div className="mx-auto max-w-full " dir="rtl">
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6 border-b-2 w-100 p-3" dir="rtl">
          <Link href="#" className="rounded-full border border-gray-300 p-3 hover:bg-gray-100 transition-colors"><Rss className="h-6 w-6 text-gray-700" /></Link>
          <Link href="#" className="rounded-full border border-gray-300 p-3 hover:bg-gray-100 transition-colors"><Linkedin className="h-6 w-6 text-gray-700" /></Link>
          <Link href="#" className="rounded-full border border-gray-300 p-3 hover:bg-gray-100 transition-colors"><Instagram className="h-6 w-6 text-gray-700" /></Link>
          <Link href="#" className="rounded-full border border-gray-300 p-3 hover:bg-gray-100 transition-colors"><Twitter className="h-6 w-6 text-gray-700" /></Link>
          <Link href="#" className="rounded-full border border-gray-300 p-3 hover:bg-gray-100 transition-colors"><Facebook className="h-6 w-6 text-gray-700" /></Link>
        </div>

        {/* Links and Logo Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-3" dir="rtl">
          {/* Links */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-center md:text-right" dir="rtl">
            {/* Logo */}
            <div className="flex justify-center items-center" dir="rtl">
              <div className="rounded-full bg-white w-32 h-32 flex items-center justify-center" dir="rtl">
                {/* Replace with actual logo if available */}
                <img src="/image/logo1.jpg" alt="logo" width={100} height={100} />
                </div>
            </div>
            <div className="flex flex-col gap-4 text-gray-500 text-xl font-medium" dir="rtl">
              <Link href="/">الرئيسية</Link>
              <Link href="/about">من نحن</Link>
              <Link href="/terms">الشروط والأحكام</Link>
            </div>
            <div className="flex flex-col gap-4 text-gray-500 text-xl font-medium" dir="rtl">
              <Link href="/write-with-us">اكتب معنا</Link>
              <Link href="/privacy">سياسة الخصوصية</Link>
            </div>
          </div>
          
        </div>
        <div className='text-gray-600  text-center text-sm font-medium py-4 border-t-2 bg-[#f9fafb] dark:bg-gray-800' dir="rtl">
          جميع الحقوق محفوظة &copy; 2023 <Link href="/" className="text-magazine-primary font-semibold">مدارك</Link>
        </div>
      </div>
    </footer>
  )
} 