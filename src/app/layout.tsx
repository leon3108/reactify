import { ThemeProvider } from '@/components/theme-provider'
import Footer from '@/components/ui/footer/footer'
import NavBar from '@/components/ui/navbar/navbar'
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
          <div className="flex flex-col h-screen bg-background">
            <ResizablePanelGroup direction="horizontal" className="h-max">
              <NavBar />
              <ResizableHandle className="bg-background" />
              <ResizablePanel>{children}</ResizablePanel>
            </ResizablePanelGroup>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
