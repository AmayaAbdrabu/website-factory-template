import type { Metadata } from "next"
import "./globals.css"
 
export const metadata: Metadata = {
  title: "Jays AI Systems",
  description: "Jays AI Systems helps Perth businesses design, implement, and scale practical AI solutions, automation workflows, and intelligent software systems with a premium consulting approach."
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
