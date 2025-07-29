import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 m-4">
              <div className=" m-4 w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ادراك</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">مركز مدراك</h3>
                <p className="text-sm text-gray-300">دراسات الإسلام الحضاري</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              مركز مدراك هو منصة أكاديمية تهدف إلى تعزيز الدراسات الإسلامية الحضارية من خلال الأبحاث والمقالات والدراسات النقدية. نحن نؤمن بأهمية الفكر الإسلامي في تشكيل الحضارات الإنسانية.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="h-4 w-4" />
                <span>info@madarak.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/category/islamic-studies" className="text-gray-300 hover:text-white transition-colors">
                  الدراسات الإسلامية
                </Link>
              </li>
              <li>
                <Link href="/category/critical-perspectives" className="text-gray-300 hover:text-white transition-colors">
                  وجهات نظر نقدية
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-gray-300 hover:text-white transition-colors">
                  المنشورات
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  من نحن
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/about#administrators" className="text-gray-300 hover:text-white transition-colors">
                  الإداريون
                </Link>
              </li>
              <li>
                <Link href="/about#researchers" className="text-gray-300 hover:text-white transition-colors">
                  الباحثون
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link href="/write-with-us" className="text-gray-300 hover:text-white transition-colors">
                  اكتب معنا
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} مركز مدراك. جميع الحقوق محفوظة.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="m-3 text-gray-300 hover:text-white text-sm transition-colors">
                سياسة الخصوصية
              </Link>
              <Link href="/terms" className="m-3 text-gray-300 hover:text-white text-sm transition-colors">
                شروط الاستخدام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 