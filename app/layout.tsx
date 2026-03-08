import type { Metadata } from "next"
import "./globals.css"
 
export const metadata: Metadata = {
  title: "Atlas AI Systems",
  description: "Atlas AI Systems helps ambitious companies streamline operations, reduce manual workload, and scale faster with tailored AI automation, intelligent workflows, and high-performance digital systems."
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
