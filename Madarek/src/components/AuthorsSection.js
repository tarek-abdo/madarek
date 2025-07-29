import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Award } from 'lucide-react'

const authors = [
  {
    id: 1,
    name: "د. احمد حسن",
    image:"/image/writer1.jpeg",
    specialization: "فلسفة إسلامية",
    publications: 15,
    slug: "ahmed-hassan"
  },
  {
    id: 2,
    name: "د. سارة المنصوري",
    image: "/image/writer2.jpeg",
    specialization: "دراسات إسلامية نقدية",
    publications: 12,
    slug: "sarah-al-mansouri"
  },
  {
    id: 3,
    name: "د. محمد خان",
    image:"/image/writer3.jpeg",
    specialization: "حضارة إسلامية",
    publications: 23,
    slug: "muhammad-khan"
  },
  {
    id: 4,
    name: "د. فاطمة الزهراء",
    image: "/image/writer4.jpeg",
    specialization: "فكر إسلامي معاصر",
    publications: 18,
    slug: "fatima-al-zahra"
  },
  {
    id: 5,
    name: "د. عمر رحمن",
    image: "/image/writer5.jpeg",
    specialization: "أخلاق إسلامية",
    publications: 9,
    slug: "omar-rahman"
  },
  {
    id: 6,
    name: "د. عائشة مالك",
    image:"/image/writer6.jpeg",
    specialization: "دراسات ما بعد الاستعمار",
    publications: 14,
    slug: "aisha-malik"
  },
  {
    id: 7,
    name: "د. خالد حسن",
    image: "/image/writer7.jpeg",
    specialization: "دراسات مستقبلية",
    publications: 7,
    slug: "khalid-hassan"
  },
  {
    id: 8,
    name: "د. زينب العلي",
    image: "/image/writer8.jpeg",
    specialization: "الجغرافيا السياسية",
    publications: 11,
    slug: "zainab-ali"
  }
]

export default function AuthorsSection() {
  return (
    <div className="relative" dir="rtl">
      {/* Scrollable Container */}
      <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
        {authors.map((author) => (
          <div key={author.id} className="flex-shrink-0 w-64">
            <Link href={`/author/${author.slug}`} className="group">
              <div className="card text-center hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <div className="relative w-32 h-32 mx-auto mb-4 mt-6">
                  <Image
                    src={author.image}
                    alt={author.name}
                    fill
                    className="object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6 pt-0">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {author.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {author.specialization}
                  </p>
                  
                  <div className="flex items-center justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" />
                      <span>{author.publications} منشور</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all duration-300">
                    <span>زيارة الملف الشخصي</span>
                    <ArrowLeft className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      
      {/* Scroll Indicators */}
      <div className="flex justify-center mt-8">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
      
      {/* View All Authors Button */}
      <div className="text-center mt-8">
        <Link
          href="/authors"
          className="btn-outline inline-flex items-center gap-2"
        >
          جميع المؤلفين
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
} 