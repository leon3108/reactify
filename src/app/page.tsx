'use client'

import { ScrollArea } from '@/ui/scroll-area'
import { useEffect } from 'react'
import Footer from './common/footer/footer'
import Navbar from './common/navbar'
import Filter from './components/filter'
import GoodMorning from './components/good-morning'
import Recommendations from './components/recommendations'

export default function Home() {
  // remove the scroll when space is pressed
  useEffect(() => {
    const handleKeyDown = (event: {
      key: string
      preventDefault: () => void
    }) => {
      if (event.key === ' ') {
        event.preventDefault()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <main className="mr-2 mt-2 flex h-full w-full flex-col space-y-4 rounded-lg bg-base p-5 pb-0">
      <Navbar path="home" />
      <Filter />
      <ScrollArea className="@container">
        <GoodMorning />
        <Recommendations />
        <Footer />
      </ScrollArea>
    </main>
  )
}
