import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Redan Chat',
  description: 'Redan Chat',
  generator: 'Nigel',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
