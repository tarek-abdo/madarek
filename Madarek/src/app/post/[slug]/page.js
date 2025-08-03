import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Tag, ArrowLeft, Share2, BookOpen } from 'lucide-react'


export default function PostPage() {
  // You can use the mock post data above for rendering
  // Or fetch post data based on slug param
  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">تفاصيل المقال</h1>
      <p className="text-gray-600">هنا سيتم عرض تفاصيل المقال بناءً على الرابط.</p>
    </div>
  );
}
