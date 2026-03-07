import type { Metadata } from "next"
import "./globals.css"
 
export const metadata: Metadata = {
  title: "Harbour Dental Care",
  description: "Harbour Dental Care provides premium dental treatment in Perth with a calm, professional approach, experienced clinicians, and modern technology for patients of all ages."
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
