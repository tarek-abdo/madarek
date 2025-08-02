'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Calendar, User } from 'lucide-react'

const featuredPosts = [
  {
    id: 1,
    title: "تطور الفكر الإسلامي في المجتمع المعاصر",
    excerpt: "تحليل معمق لكيفية تطور الفكر الإسلامي وتكيفه مع التحديات الحديثة مع الحفاظ على مبادئه الأساسية.",
    image: '/image/navbar2.jpg',
    category: "الدراسات الإسلامية",
    author: "د. أحمد حسن",
    date: "2024-01-15",
    slug: "evolution-islamic-thought-contemporary-society"
  },
  {
    id: 2,
    title: "وجهات نظر نقدية حول الخطاب الإسلامي بعد الاستعمار",
    excerpt: "دراسة تقاطع نظرية ما بعد الاستعمار والخطاب الإسلامي في العالم الحديث.",
    image: '/image/navbar2.jpg',
    category: "وجهات نظر نقدية",
    author: "د. سارة المنصوري",
    date: "2024-01-12",
    slug: "critical-perspectives-post-colonial-islamic-discourse"
  },
  {
    id: 3,
    title: "الآثار الجيوسياسية لدراسات الحضارة الإسلامية",
    excerpt: "فهم التأثير العالمي لدراسات الحضارة الإسلامية في الجغرافيا السياسية المعاصرة.",
    image: '/image/navbar2.jpg',
    category: "دراسات وتحليلات",
    author: "أ. محمد خان",
    date: "2024-01-10",
    slug: "geopolitical-implications-islamic-civilizational-studies"
  }
]

export default function FeaturedSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredPosts.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredPosts.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative h-[600px] overflow-hidden" dir="rtl">
      {/* Slides */}
      {featuredPosts.map((post, index) => (
        <div
          key={post.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          dir="rtl"
        >
          {/* Background Image */}
          <div className="absolute inset-0" dir="rtl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center" dir="rtl">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full" dir="rtl">
              <div className="max-w-3xl" dir="rtl">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary text-white mb-4">
                  {post.category}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {post.title}
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-6 mb-8 text-white/80" dir="rtl">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                </div>
                <Link
                  href={`/post/${post.slug}`}
                  className="btn-primary text-lg px-8 py-3 inline-flex items-center gap-2"
                >
                  قراءة المقال
                  <ChevronLeft className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows (RTL: swap left/right) */}
      <button
        onClick={prevSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
        aria-label="الشريحة السابقة"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
        aria-label="الشريحة التالية"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Dots (RTL: flex-row-reverse) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-row-reverse space-x-reverse space-x-0 mx-4" dir="rtl">
        {featuredPosts.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`انتقل إلى الشريحة ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-5000 ease-linear"
          style={{
            width: `${((currentSlide + 1) / featuredPosts.length) * 100}%`
          }}
        />
      </div>
    </div>
  )
}