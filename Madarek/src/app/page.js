import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, Users, BookOpen, TrendingUp } from 'lucide-react'
import FeaturedSlider from '../components/FeaturedSlider'
import LatestContent from '../components/LatestContent'
import MostReadContent from '../components/MostReadContent'
import PostDelugeSection from '../components/PostDelugeSection'
import AuthorsSection from '../components/AuthorsSection'
import EventSchedule from '../components/EventSchedule'

export default function HomePage() {
  return (
    <div className="min-h-screen" dir="rtl">
      {/* قسم البطل مع السلايدر المميز */}
      <section className="relative" dir="rtl">
        <FeaturedSlider />
      </section>

      {/* قسم أحدث المحتوى */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900" dir="rtl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                أحدث المحتوى
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                ابق على اطلاع بأحدث أبحاثنا ومقالاتنا ودراساتنا
              </p>
            </div>
            <Link 
              href="/category/articles" 
              className="btn-primary flex items-center gap-2"
            >
              عرض الكل
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
          <LatestContent />
        </div>
      </section>

      {/* قسم الأكثر قراءة */}
      <section className="py-16" dir="rtl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                الأكثر قراءة
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                المقالات والدراسات الأكثر شعبية من مجتمعنا
              </p>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <TrendingUp className="h-5 w-5" />
              <span className="font-medium">الأكثر تداولاً</span>
            </div>
          </div>
          <MostReadContent />
        </div>
      </section>

      {/* قسم مجلة ما بعد الطوفان */}
      <section className="py-16 bg-magazine-background" dir="rtl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <PostDelugeSection />
        </div>
      </section>

      {/* قسم المؤلفين */}
      <section className="py-16 bg-white dark:bg-dark-surface" dir="rtl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              الباحثون والمؤلفون لدينا
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              تعرف على العلماء والباحثين الذين يساهمون في فهمنا للإسلام الحضاري
            </p>
          </div>
          <AuthorsSection />
        </div>
      </section>

      {/* قسم جدول الفعاليات */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900" dir="rtl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              الفعاليات القادمة
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              انضم إلينا في الندوات والمؤتمرات والمناقشات الأكاديمية
            </p>
          </div>
          <EventSchedule />
        </div>
      </section>

      {/* دعوة للانضمام */}
      {/* <section className="py-16 gradient-bg" dir="rtl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            انضم إلى مجتمع البحث العلمي لدينا
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            ساهم في دراسة الإسلام الحضاري من خلال وجهات نظر نقدية وبحث علمي
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/write-with-us" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              اكتب معنا
            </Link>
            <Link href="/about" className="btn-primary bg-white text-primary hover:bg-gray-100">
              اعرف المزيد
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  )
}