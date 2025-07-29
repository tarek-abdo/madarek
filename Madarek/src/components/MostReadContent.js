import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Eye, ArrowLeft } from 'lucide-react'

const mostReadPosts = [
  {
    id: 1,
    title: "الحضارة الإسلامية في العالم الحديث: دراسة شاملة",
    excerpt: "استكشاف شامل لكيفية تأثير الحضارة الإسلامية على العالم الحديث واستمرار تشكيله.",
    image: "/image/book1.jpeg",
    category: "الدراسات الإسلامية",
    author: "د. أحمد حسن",
    date: "2024-01-05",
    views: 15420,
    slug: "islamic-civilization-modern-world-comprehensive-study"
  },
  {
    id: 2,
    title: "نظرية النقد والفكر الإسلامي: جسر الفجوة",
    excerpt: "استكشاف التقاطعات بين نظرية النقد والتقاليد الفكرية الإسلامية.",
    image: "/image/book2.jpeg",
    category: "وجهات نظر نقدية",
    author: "د. سارة المنصوري",
    date: "2024-01-08",
    views: 12850,
    slug: "critical-theory-islamic-thought-bridging-gap"
  },
  {
    id: 3,
    title: "تحليل جيوسياسي: العالم الإسلامي في القرن الحادي والعشرين",
    excerpt: "تحليل متعمق للمشهد الجيوسياسي للعالم الإسلامي في العصر الحديث.",
    image: "/image/book3.jpeg",
    category: "الدراسات والتحليلات",
    author: "د. محمد خان",
    date: "2024-01-03",
    views: 11230,
    slug: "geopolitical-analysis-islamic-world-21st-century"
  },
  {
    id: 4,
    title: "قراءات فلسفية: مفكرون إسلاميون معاصرون",
    excerpt: "استطلاع لمفكرين إسلاميين معاصرين ومساهماتهم في الفكر الحديث.",
    image: "/image/book4.jpeg",
    category: "وجهات نظر نقدية",
    author: "د. فاطمة الزهراء",
    date: "2024-01-01",
    views: 9870,
    slug: "philosophical-readings-contemporary-islamic-thinkers"
  }
]

export default function MostReadContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {mostReadPosts.map((post, index) => (
        <article key={post.id} className="card group">
          <div className="flex flex-col md:flex-row">
            <div className="relative w-full md:w-48 h-48 md:h-auto overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-t-none">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary text-white">
                  {post.category}
                </span>
              </div>
              {index < 2 && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-yellow-500 text-white">
                    #{index + 1}
                  </span>
                </div>
              )}
            </div>
            
            <div className="flex-1 p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <Eye className="h-4 w-4" />
                  <span>{post.views.toLocaleString()}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                <Link href={`/post/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <Link
                href={`/post/${post.slug}`}
                className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
              >
                قراءة المزيد
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
} 