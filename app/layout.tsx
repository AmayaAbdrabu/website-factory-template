import type { Metadata } from "next"
import "./globals.css"
 
export const metadata: Metadata = {
  title: "Perth Precision Plumbing",
  description: "Fast response, high-quality workmanship, and clear communication for maintenance, repairs, installations, and emergency plumbing across Perth."
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
