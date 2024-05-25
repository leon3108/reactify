import { ThemeProvider } from '@/app/theme-provider'
import Footer from '@/app/common/footer/footer'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/ui/resizable'
import SideBar from '@/app/common/sidebar/sidebar'
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
          <div className="flex h-screen flex-col bg-background">
            <ResizablePanelGroup direction="horizontal" className="h-max">
              <SideBar />
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
