export const metadata = {
  title: 'Reactify Login',
  description: 'Login to Reactify with Spotify account.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
