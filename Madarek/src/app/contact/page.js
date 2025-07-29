import { Mail, MessageSquare, Users, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-primary text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">تواصل معنا</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            تواصل معنا للتعاون، الاستفسارات البحثية، أو الأسئلة العامة حول عملنا في الدراسات الإسلامية.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">تواصل مباشر</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">البريد الإلكتروني</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      للاستفسارات العامة والمعلومات:
                    </p>
                    <a 
                      href="mailto:info@madarak.org" 
                      className="text-primary hover:text-primary/80 font-medium"
                    >
                      info@madarak.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <MessageSquare className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">الاستفسارات البحثية</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      للتعاون البحثي والشراكات الأكاديمية:
                    </p>
                    <a 
                      href="mailto:research@madarak.org" 
                      className="text-primary hover:text-primary/80 font-medium"
                    >
                      research@madarak.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">المساهمات</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      لتقديم المقالات والمساهمات:
                    </p>
                    <a 
                      href="mailto:contributions@madarak.org" 
                      className="text-primary hover:text-primary/80 font-medium"
                    >
                      contributions@madarak.org
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">ساعات العمل</h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <p><span className="font-medium">الاثنين - الجمعة:</span> 9:00 صباحاً - 5:00 مساءً (GMT+3)</p>
                  <p><span className="font-medium">السبت:</span> 10:00 صباحاً - 2:00 مساءً (GMT+3)</p>
                  <p><span className="font-medium">الأحد:</span> مغلق</p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
                  عادةً ما نرد على الرسائل الإلكترونية خلال 24-48 ساعة في أيام العمل.
                </p>
              </div>
            </div>

            {/* Write with Us Section */}
            <div className="bg-white dark:bg-dark-surface rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Send className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">اكتب معنا</h2>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                نرحب بمساهمات العلماء والباحثين والكتّاب المهتمين بالدراسات الإسلامية، والرؤى النقدية، والفكر المعاصر.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-gray-900 dark:text-white">نقبل:</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>مقالات أكاديمية وأبحاث علمية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>تحليلات نقدية وتعليقات</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>مراجعات كتب ومسوح أدبية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>مقابلات مع علماء ومفكرين</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>ترجمات للأعمال المهمة</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-gray-900 dark:text-white">إرشادات التقديم:</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>يجب أن تتراوح المقالات بين 3,000-8,000 كلمة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>استخدم أسلوب التوثيق الأكاديمي (شيكاغو/تورابيان)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>أرفق ملخص وكلمات مفتاحية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>أرسل الملف بصيغة Word أو PDF</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>ملاحظة:</strong> جميع المساهمات تخضع لمراجعة الأقران. نسعى للرد على المساهمات خلال 4-6 أسابيع. لمزيد من التفاصيل حول إرشادات التقديم، يرجى مراسلتنا عبر البريد الإلكتروني{' '}
                  <a 
                    href="mailto:contributions@madarak.org" 
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    contributions@madarak.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">الأسئلة الشائعة</h2>
            <p className="text-gray-600 dark:text-gray-400">
              اعثر على إجابات لأكثر الأسئلة شيوعاً حول المركز وكيفية المشاركة.
            </p>
          </div>

          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                كيف يمكنني المساهمة في منشوراتكم؟
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                نرحب بمساهمات العلماء والباحثين. يرجى إرسال مساهمتك إلى contributions@madarak.org مع رسالة تعريفية موجزة عن عملك.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                هل تقدمون زمالات بحثية أو وظائف؟
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                نقدم أحياناً وظائف بحثية وزمالات. يرجى التواصل عبر research@madarak.org لمعرفة الفرص الحالية وإجراءات التقديم.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                هل يمكنني حضور فعالياتكم ومؤتمراتكم؟
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                نعم، فعالياتنا متاحة للمجتمع الأكاديمي والجمهور المهتم. تفاصيل التسجيل تُعلن عبر الموقع الإلكتروني وقنوات التواصل الاجتماعي.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                كيف يمكنني الاشتراك في النشرة البريدية؟
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                يمكنك الاشتراك في النشرة البريدية عبر إرسال بريد إلكتروني إلى info@madarak.org مع كتابة "اشتراك في النشرة" في عنوان الرسالة.
              </p>
            </div>
        </div>
        </div>
      </section>
    </div>
  )
}
