import type { Metadata } from "next"
import "./globals.css"
 
export const metadata: Metadata = {
  title: "Jays Roofing",
  description: "Jays Roofing delivers safe, reliable roof cleaning and exterior roof care for homes and properties that need a cleaner, smarter finish."
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
