import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, Download, Users, ArrowLeft } from 'lucide-react'

const currentIssue = {
  title: "مجلة بوست-دلوج",
  subtitle: "الاصدار #15 - شتاء 2024",
  theme: "الفكر الإسلامي في العصر الرقمي",
  cover: "/image/magazine4.jpeg",
  description: "استكشاف تقاطع الفكر الإسلامي والتكنولوجيا الرقمية، وفحص كيفية تكيف الحكمة التقليدية مع المشهد الرقمي الحديث.",
  price: "$25.00"
}

const previousIssues = [
  {
    id: 1,
    title: "الاصدار #14 - خريف 2023",
    theme: "خطاب إسلامي ما بعد الاستعمار",
    cover: "/image/magazine1.jpeg",
    date: "2023-10-15"
  },
  {
    id: 2,
    title: "الاصدار #13 - صيف 2023",
    theme: "الفلسفة الإسلامية المعاصرة",
    cover: "/image/magazine2.jpeg",
    date: "2023-07-20"
  },
  {
    id: 3,
    title: "الاصدار #12 - ربيع 2023",
    theme: "الأخلاق الإسلامية في المجتمع الحديث",
    cover: "/image/magazine3.jpeg",
    date: "2023-04-10"
  }
]

const editorialBoard = [
  {
    name: "د. أحمد حسن",
    position: "رئيس التحرير",
    image: "/image/writer1.jpeg",
    bio: "أستاذ الدراسات الإسلامية في جامعة القاهرة"
  },
  {
    name: "د. سارة المنصوري",
    position: "محررة مشاركة",
    image: "/image/writer2.jpeg",
    bio: "باحثة في الدراسات الإسلامية النقدية"
  },
  {
    name: "أ. محمد خان",
    position: "عضو هيئة التحرير",
    image: "/image/writer3.jpeg",
    bio: "مدير معهد البحوث الإسلامية"
  }
]

const advisoryBoard = [
  {
    name: "د. فاطمة الزهراء",
    position: "رئيسة هيئة المستشارين",
    image: "/image/writer4.jpeg",
    bio: "أستاذة متميزة في الفلسفة الإسلامية"
  },
  {
    name: "د. عمر رحمن",
    position: "عضو هيئة المستشارين",
    image: "/image/writer5.jpeg",
    bio: "خبير في الفكر الإسلامي المعاصر"
  }
]

export default function PostDelugeSection() {
  return (
    <div className="py-16" dir="rtl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <BookOpen className="h-8 w-8 text-magazine-primary" />
          <h2 className="text-4xl font-bold text-magazine-primary">مجلة بوست-دلوج</h2>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          مجلة فصلية مخصصة لوجهات النظر النقدية حول الحضارة الإسلامية،
          الفكر المعاصر، والبحث العلمي في مجال الدراسات الإسلامية.
        </p>
      </div>

      {/* Current Issue */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="relative">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={currentIssue.cover}
              alt={currentIssue.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-bold text-white mb-2">{currentIssue.title}</h3>
              <p className="text-white/90 mb-4">{currentIssue.theme}</p>
              <div className="flex gap-3">
                <Link href="/magazine/current/contents" className="btn-primary">
                  المحتويات
                </Link>
                <Link href="/magazine/current/buy" className="btn-outline border-white text-white hover:bg-white hover:text-magazine-primary">
                  شراء العدد - {currentIssue.price}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-magazine-primary mb-4">الاصدار الحالي</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            {currentIssue.description}
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-magazine-secondary rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">تحليل نقدي للتحول الرقمي في المجتمعات الإسلامية</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-magazine-secondary rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">مقابلات مع كبار العلماء والمفكرين الإسلاميين</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-magazine-secondary rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">مراجعات كتب وأبرز الأبحاث</span>
            </div>
          </div>
        </div>
      </div>

      {/* Previous Issues */}
      <div className="mb-16 ">
        <h3 className="text-2xl font-bold text-magazine-primary mb-8">الإصدارات السابقة</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previousIssues.map((issue) => (
            <div key={issue.id} className="card group">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                  src={issue.cover}
                  alt={issue.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{issue.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{issue.theme}</p>
                <Link
                  href={`/magazine/issue/${issue.id}`}
                  className="inline-flex items-center gap-1 text-magazine-secondary hover:text-magazine-secondary/80 font-medium text-sm"
                >
                  قراءة المزيد
                  <Download className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Editorial Board */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-magazine-primary mb-8 text-center">هيئة التحرير</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {editorialBoard.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-semibold text-dark-900 dark:text-white mb-1">{member.name}</h4>
              <p className="text-sm text-magazine-secondary mb-2">{member.position}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Advisory Board */}
      <div>
        <h3 className="text-2xl font-bold text-magazine-primary mb-8 text-center">هيئة المستشارين</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {advisoryBoard.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h4>
              <p className="text-sm text-magazine-secondary mb-2">{member.position}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <Link
          href="/publications"
          className="btn-primary bg-magazine-primary hover:bg-magazine-primary/90 inline-flex items-center gap-2"
        >
         عرض جميع المنشورات
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
} 