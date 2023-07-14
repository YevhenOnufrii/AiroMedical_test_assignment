import './globals.scss'

export const metadata = {
  title: 'Airomedical_test',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
