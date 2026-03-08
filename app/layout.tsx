import type { Metadata } from "next"
import "./globals.css"
 
export const metadata: Metadata = {
  title: "Atlas AI Systems",
  description: "Atlas AI Systems helps Perth businesses streamline operations, reduce manual workload, and unlock growth with custom AI automation, workflow design, and practical implementation."
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
