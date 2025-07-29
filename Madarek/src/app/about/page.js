import Image from 'next/image'
import Link from 'next/link'
import { Target, Eye, Award, Users, Mail, ArrowLeft } from 'lucide-react'

const administrators = [
  {
    name: "د. أحمد حسن",
    position: "المدير",
    image: '/image/writer1.jpeg',
    bio: "أستاذ الدراسات الإسلامية بخبرة تزيد عن 20 عامًا في أبحاث الإسلام الحضاري. عميد سابق لكلية الدراسات الإسلامية بجامعة القاهرة.",
    email: "ahmed.hassan@madarak.org"
  },
  {
    name: "د. سارة المنصوري",
    position: "نائب المدير",
    image: '/image/writer2.jpeg',
    bio: "خبيرة في الدراسات الإسلامية النقدية ونظرية ما بعد الاستعمار. نشرت العديد من الأبحاث حول الفكر الإسلامي المعاصر وتأثيراته العالمية.",
    email: "sarah.al-mansouri@madarak.org"
  },
  {
    name: "أ. محمد خان",
    position: "مدير البحث",
    image: '/image/writer3.jpeg',
    bio: "باحث بارز في دراسات الحضارة الإسلامية مع تركيز على التحليل الجيوسياسي ودراسات المستقبل في العالم الإسلامي.",
    email: "muhammad.khan@madarak.org"
  }
]

const researchers = [
  {
    name: "د. فاطمة الزهراء",
    area: "الفلسفة الإسلامية المعاصرة",
    image: "/image/writer4.jpeg",
    description: "متخصصة في الفكر الفلسفي الإسلامي الحديث وتكيفه مع التحديات المعاصرة.",
    publications: 18
  },
  {
    name: "د. عمر رحمن",
    area: "الأخلاق الإسلامية والأعمال",
    image: "/image/writer5.jpeg",
    description: "خبير في أخلاقيات الأعمال الإسلامية وتطبيقاتها في الأنظمة الاقتصادية الحديثة.",
    publications: 9
  },
  {
    name: "د. عائشة مالك",
    area: "دراسات ما بعد الاستعمار الإسلامية",
    image: "/image/writer6.jpeg",
    description: "باحثة تركز على السرديات ما بعد الاستعمار وتأثيرها على الخطاب الإسلامي.",
    publications: 14
  },
  {
    name: "د. خالد حسن",
    area: "دراسات المستقبل والتقنية",
    image: "/image/writer7.jpeg",
    description: "يدرس تقاطع الفكر الإسلامي مع التقنيات الناشئة واتجاهات المجتمع المستقبلية.",
    publications: 7
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* القسم التعريفي */}
        <section className="py-20 bg-gradient-to-br from-secondary to-primary text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">عن المركز</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              مركز مدرك لدراسة الإسلام الحضاري يكرّس جهوده لتعزيز البحث العلمي والرؤى النقدية حول الحضارة الإسلامية في العالم الحديث.
            </p>
          </div>
        </section>

        {/* الرؤية، الرسالة، الأهداف */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">الرؤية</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                أن يكون مركزًا رائدًا لدراسة الإسلام الحضاري، يعزز الرؤى النقدية والتميز العلمي لفهم الفكر الإسلامي وأهميته المعاصرة.
              </p>
            </div>

            {/* Mission */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-secondary/10 rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">الرسالة</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                إجراء بحوث علمية دقيقة، ونشر أعمال أكاديمية، وتسهيل الحوار العلمي حول الحضارة الإسلامية من خلال التحليل النقدي والرؤى المعاصرة.
              </p>
            </div>

            {/* Objectives */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">الأهداف</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                تطوير المعرفة في الدراسات الإسلامية، وتعزيز التفكير النقدي، والمساهمة في الفهم العالمي للحضارة الإسلامية وتجلياتها الحديثة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* الأنشطة */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">أنشطتنا</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              نشارك في أنشطة متنوعة لتحقيق رسالتنا وتطوير دراسة الإسلام الحضاري.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">البحث العلمي</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                إجراء بحوث شاملة حول الحضارة الإسلامية والفكر المعاصر.
              </p>
            </div>

            <div className="card text-center p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">النشر العلمي</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                نشر مقالات أكاديمية وكتب ومجلة ما بعد الطوفان.
              </p>
            </div>

            <div className="card text-center p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">المؤتمرات</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                تنظيم مؤتمرات وندوات أكاديمية في الدراسات الإسلامية.
              </p>
            </div>

            <div className="card text-center p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Eye className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">التعليم</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                توفير موارد تعليمية وتعزيز الحوار الأكاديمي.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* الفريق الإداري */}
      <section className="py-16" id="administrators">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">الفريق الإداري</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              تعرف على فريق القيادة المكرس لتطوير دراسة الإسلام الحضاري.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {administrators.map((admin) => (
              <div key={admin.name} className="card text-center group">
                <div className="relative w-32 h-32 mx-auto mb-6 mt-6">
                  <Image
                    src={admin.image}
                    alt={admin.name}
                    fill
                    className="object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 pt-0">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{admin.name}</h3>
                  <p className="text-primary font-medium mb-4">{admin.position}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {admin.bio}
                  </p>
                  <a
                    href={`mailto:${admin.email}`}
                    className="inline-flex items-center gap-1 text-primary hover:text-primary/80 text-sm font-medium"
                  >
                    <Mail className="h-4 w-4" />
                    تواصل
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* الباحثون */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900" id="researchers">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">الباحثون</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              تعرف على فريق الباحثين المكرسين للمساهمة في تطوير الدراسات الإسلامية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchers.map((researcher) => (
              <div key={researcher.name} className="card group">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={researcher.image}
                    alt={researcher.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{researcher.name}</h3>
                  <p className="text-sm text-primary mb-2">{researcher.area}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-3">
                    {researcher.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {researcher.publications} منشور
                    </span>
                    <Link
                      href={`/author/${researcher.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-primary hover:text-primary/80 text-xs font-medium"
                    >
                      عرض الملف الشخصي
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم التواصل */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">تواصل معنا</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            هل أنت مهتم بعملنا؟ ترغب في التعاون أو المساهمة؟ يسعدنا التواصل معك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              تواصل معنا
            </Link>
            <Link href="/write-with-us" className="btn-outline">
              اكتب معنا
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 