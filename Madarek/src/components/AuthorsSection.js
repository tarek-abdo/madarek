'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

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
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;
  const maxIndex = authors.length - visibleCount;

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? authors.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrent((prev) => (prev === authors.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col items-center  py-8" dir="rtl">
      <div className="flex justify-center items-center gap-4 w-full">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center text-gray-400 hover:text-primary transition-colors"
          aria-label="السابق"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Cards */}
        <div className="flex gap-8 w-full max-w-5xl">
          {[0, 1, 2].map((offset) => {
            const idx = (current + offset) % authors.length;
            const author = authors[idx];
            return (
              <div key={author.id} className="bg-white rounded-xl shadow-md flex flex-col items-center px-8 py-8 w-full max-w-sm mx-auto">
                <div className="w-24 h-24 mb-4">
                  <Image
                    src={author.image}
                    alt={author.name}
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">{author.name}</h3>
                <p className="text-lg text-gray-500 mb-4 text-center">{author.specialization}</p>
                <Link
                  href={`/author/${author.slug}`}
                  className="bg-[#F76C5E] text-white rounded-full px-8 py-3 text-lg font-medium shadow hover:bg-[#F76C5E]/90 transition-colors"
                >
                  تصفح مقالات الكاتب
                </Link>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center text-gray-400 hover:text-primary transition-colors"
          aria-label="التالي"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {authors.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-4 h-4 rounded-full border-none focus:outline-none ${idx === current ? 'bg-gray-400' : 'bg-gray-200'}`}
            aria-label={`انتقل إلى الكاتب ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}