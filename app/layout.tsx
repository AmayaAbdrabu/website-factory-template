import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "CallVault",
  description: "Upload recorded calls and get AI-generated transcripts, concise summaries, and structured reports saved by account for fast review, better oversight, and smarter decisions."
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
