import type { Metadata } from "next"
import "./globals.css"
 
export const metadata: Metadata = {
  title: "Atlas AI Systems",
  description: "Atlas AI Systems helps Perth businesses automate repetitive work, improve response times, and build smarter operations with practical AI solutions tailored to real business outcomes."
}
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  )
}
