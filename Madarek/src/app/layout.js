import '../styles/globals.css'
import { Inter } from 'next/font/google'

import Header from '../components/Header'
import Footer from '../components/Footer'
import ThemeProvider from '../components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'مركز مدارك لدراسة الإسلام الحضاري',
  description: 'مركز مخصص لدراسة الإسلام الحضاري من خلال وجهات نظر نقدية، وفكر معاصر، وبحث علمي.',
  keywords: 'دراسات إسلامية، الإسلام الحضاري، وجهات نظر نقدية، فكر معاصر، مركز بحثي',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 