import type { Metadata } from "next"
import "./globals.css"
 
export const metadata: Metadata = {
  title: "Hassy’s Mowing",
  description: "Hassy’s Mowing delivers high-end mowing and hedge trimming services across Perth with reliable scheduling, modern equipment, and a clean, trustworthy experience from first enquiry to final finish."
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
