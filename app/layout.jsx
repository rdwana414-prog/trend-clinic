import './globals.css'

export const metadata = {
  title: 'Trend Clinic',
  description: 'Modern Healthcare Clinic',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  )
}