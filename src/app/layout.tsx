import { ThemeProvider } from '@/components/theme-provider'
import NavBar from '@/components/ui/navBar'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotiflex',
  description: 'Clone of Spotify, built with NextJs, by @leon',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ResizablePanelGroup direction="horizontal">
            <NavBar />
            <ResizableHandle />
            <ResizablePanel>{children}</ResizablePanel>
          </ResizablePanelGroup>
        </ThemeProvider>
      </body>
    </html>
  )
}
