import type { Metadata } from "next"
import "./globals.css"
 
export const metadata: Metadata = {
  title: "Harbour Dental Care",
  description: "Harbour Dental Care delivers premium family and cosmetic dentistry in Perth with a calm, modern clinic environment, advanced technology, and a patient-first approach designed for comfort at every visit."
}
 
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
