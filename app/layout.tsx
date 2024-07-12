import './css/style.css'

import { Inter, Bacasime_Antique } from 'next/font/google'

import Header from '@/components/Header/index'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const bacasime_antique = Bacasime_Antique({
  subsets: ['latin'],
  variable: '--font-bacasime-antique',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'Peak Footage',
  description: 'Experienced FPV drone pilot videography studio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bacasime_antique.variable} font-inter antialiased bg-white-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
 
