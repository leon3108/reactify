import Footer from '@/app/common/footer/footer'
import SideBar from '@/app/common/sidebar/sidebar'
import { ThemeProvider } from '@/app/theme-provider'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/ui/resizable'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CurrentSongProvider } from './current-song-provider'
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
          <CurrentSongProvider>
            <div className="flex h-screen flex-col bg-background">
              <ResizablePanelGroup direction="horizontal" className="h-max">
                <SideBar />
                <ResizableHandle className="w-2 bg-background" />
                <ResizablePanel>{children}</ResizablePanel>
              </ResizablePanelGroup>
              <Footer />
            </div>
          </CurrentSongProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
