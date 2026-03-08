import type { Metadata } from "next"
import "./globals.css"
 
export const metadata: Metadata = {
  title: "Aereal",
  description: "Aereal delivers safe, efficient window and building exterior cleaning for commercial properties, apartments, offices, schools, and high-access sites—without the disruption, cost, or risk of traditional access equipment."
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
