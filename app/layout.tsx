import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "NeuralScale AI",
  description: "NeuralScale AI helps Australian businesses design, implement and optimise AI automation that improves efficiency, reduces manual work and creates measurable competitive advantage."
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
