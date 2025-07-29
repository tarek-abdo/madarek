import { Calendar, Clock, MapPin, Users, Plus } from 'lucide-react'

export default function EventSchedule() {
  return (
    <div className="text-center" dir="rtl">
      <div className="max-w-2xl mx-auto">
        <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
          <Calendar className="h-12 w-12 text-gray-400" />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          جدول الأحداث قريبًا
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          نحن حالياً نقوم بتخطيط فعالياتنا القادمة، من ندوات ومؤتمرات. سيتم نشر جدول الأحداث قريباً، والذي سيشمل مناقشات أكاديمية، عروض بحثية، وتجمعات علمية.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ندوات</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              مناقشات أكاديمية وعروض بحثية
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
              <Calendar className="h-8 w-8 text-secondary" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">مؤتمرات</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              تجمعات دولية للعلماء والباحثين
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ورش عمل</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              جلسات تفاعلية وتطوير المهارات
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"></div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            ابق على اطلاع
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            اشترك في النشرة البريدية ليصلك إشعار عند نشر جدول الأحداث.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
              dir="rtl"
            />
            <button className="btn-primary whitespace-nowrap">
              اشترك
            </button>
          </div>
        </div>
      </div>
      

  )
} 