import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Jays Roofing",
  description: "Jays Roofing delivers professional roof repairs, restorations, re-roofing and maintenance for homes and businesses across Perth. Quality workmanship, clear communication and dependable service from start to finish."
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
