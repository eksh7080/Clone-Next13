import Header from '@/components/Header'
import './global.css'
import Providers from './Providers'

export const metadata = {
  title: 'INVU',
  description: 'APP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <Providers>

          {/* Header */}
          <Header />

          {/* Navbar */}

          {/* SearchBox */}

        {children}
        </Providers>
      </body>
    </html>
  )
}
