import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, ArrowLeft } from 'lucide-react'

const latestPosts = [
  {
    id: 1,
    title: "فلسفة إسلامية معاصرة: تحليل نقدي",
    excerpt: "استكشاف الأسس الفلسفية للفكر الإسلامي المعاصر وآثاره على المجتمع الحديث.",
    image: '/image/writer1.jpeg',
    category: "وجهات نظر نقدية",
    author: "د. فاطمة الزهراء",
    date: "2024-01-20",
    slug: "contemporary-islamic-philosophy-critical-analysis"
  },
  {
    id: 2,
    title: "دور الأخلاق الإسلامية في الأعمال الحديثة",
    excerpt: "كيف يمكن للمبادئ الأخلاقية الإسلامية أن توجه ممارسات الأعمال في الاقتصاد العالمي المعاصر.",
    image: '/image/writer2.jpeg',
    category: "الدراسات الإسلامية",
    author: "أ. عمر رحمن",
    date: "2024-01-18",
    slug: "islamic-ethics-modern-business"
  },
  {
    id: 3,
    title: "وجهات نظر ما بعد الاستعمار في الأدب الإسلامي",
    excerpt: "دراسة تقاطع نظرية ما بعد الاستعمار والتقاليد الأدبية الإسلامية.",
    image: '/image/writer3.jpeg',
    category: "الدراسات الإسلامية",
    author: "د. عائشة مالك",
    date: "2024-01-16",
    slug: "post-colonial-narratives-islamic-literature"
  },
  {
    id: 4,
    title: "دراسات مستقبلية: وجهات نظر إسلامية حول التكنولوجيا",
    excerpt: "وجهات نظر إسلامية حول التقنيات الناشئة وآثارها على المجتمع والثقافة.",
    image: '/image/writer4.jpeg',
    category: "الدراسات المستقبلية",
    author: "د. خالد حسن",
    date: "2024-01-14",
    slug: "future-studies-islamic-perspectives-technology"
  }
]

export default function LatestContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {latestPosts.map((post) => (
        <article key={post.id} className="card group">
          <div className="relative h-48 overflow-hidden rounded-t-lg">
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
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
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
            
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
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
        </article>
      ))}
    </div>
  )
} 